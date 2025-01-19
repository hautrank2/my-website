import { BLOG_TABLE, NAV_BARS } from '~/constants/blog';
import { Blog } from '~/models/blog';
import { BlogContent } from '~/models/blogContent';
import { BlogEditorSession } from '~/models/BlogEditorSession';
import fileUtil, { deleteFile, deleteFiles } from '~/utils/fileUtil';
import { transformErrorArrayToErrorForm } from '~/validators';

const blogController = {};

blogController.viewHome = (req, res) => {
  const stacks = [
    {
      title: 'Frontend',
      background: '/img/frontend.svg',
      techs: [
        { logo: 'bx bxl-react', title: 'React' },
        { logo: 'bx bxl-angular', title: 'Angular' },
      ],
      content:
        'Frontend development refers to the part of web development that focuses on the user-facing aspects of a website or application. It involves creating everything that users see, interact with, and experience directly on their screens. This includes the layout, design, navigation, and responsiveness of a website or app.',
    },
    {
      title: 'Backend',
      background: '/img/backend.svg',
      techs: [{ logo: 'bx bxl-nodejs', title: 'Nodejs' }],
      content:
        'The backend is the server-side part of a web application responsible for managing the logic, database operations, and communication with the frontend. It handles data processing, business logic, and the underlying infrastructure that powers an application.',
    },
    {
      title: 'UI/UX design',
      background: '/img/ui_ux.svg',
      techs: [{ logo: 'bx bxl-figma', title: 'Figma' }],
      content:
        'UI/UX Design is a critical process in creating digital products that are visually appealing, user-friendly, and effective. It focuses on both the aesthetics and the overall experience of interacting with a website, app, or software.',
    },
  ];

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
    },
    {
      id: 'stacks',
      title: 'Stacks',
    },
  ];

  res.render('home', { page: 'home', navbars: NAV_BARS, stacks, sections });
};

blogController.viewBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({ active: true }).lean();
    res.render('blog/index', { page: 'blog', navbars: NAV_BARS, blogs });
  } catch (error) {
    console.log(error);
  }
};

blogController.viewBlogContent = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId).lean();
    if (!blog) {
      res
        .status(404)
        .send({ message: 'Could not find blog with id ' + blogId });
    }
    const blogCtnId = blog.blogContent;
    const blogContent = await BlogContent.findById(blogCtnId).lean();
    res.render('blog/view', {
      page: 'blog',
      navbars: NAV_BARS,
      content: JSON.stringify(blogContent.content),
      blog,
    });
  } catch (error) {
    console.log(error);
  }
};

blogController.viewBlogForm = async (req, res, next) => {
  try {
    let { values = {} } = req;
    const isEdit = req.query.edit;
    const blogId = req.query.blogId;
    if (isEdit && !values.keys) {
      const blog = await Blog.findById(blogId).lean();
      values = blog;
    }
    res.render('blog/form', {
      page: 'admin/blog',
      navbars: NAV_BARS,
      formError: req.validationErrors || {},
      values,
      isEdit,
    });
  } catch (error) {
    console.log(error);
  }
};

blogController.viewBlogEditor = async (req, res, next) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId).lean();
    if (blog.blogContent) {
      const blogContentId = blog.blogContent;
      const blogContent = await BlogContent.findById(blogContentId);
      res.render('blog/editor', {
        page: 'Blog',
        blog,
        navbars: NAV_BARS,
        content: JSON.stringify(blogContent.content),
        blogContentId,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

blogController.uploadImg = async (req, res, next) => {
  try {
    const blogContentId = req.params.blogContentId;
    const path = req.file.path;
    const blogES = await BlogEditorSession.findOne({ blogContentId });
    if (!blogES) {
      const blogEditorSession = new BlogEditorSession({
        blogContentId: req.params.blogContentId,
        files: [path],
      });
      await blogEditorSession.save();
    } else {
      blogES.imageUrls.push(path);
      blogES.save();
    }

    res.status(200).send({ message: 'Upload successfully', path });
  } catch (err) {
    console.log(err);
  }
};

blogController.editBlogContent = async (req, res, next) => {
  try {
    const blogContentId = req.params.blogContentId;
    const content = req.body.content;

    let imgUrls = [];
    content.ops.forEach((row) => {
      if (row['insert']['image']) {
        imgUrls.push(row['insert']['image']);
      }
    });

    //hanlde blogContent
    const blogES = await BlogEditorSession.findOne({ blogContentId });
    if (blogES) {
      // Filter and delete image (exist on blog content)
      const deletedUrls = blogES.imageUrls.filter((imgUrl) => {
        return !imgUrls.includes(imgUrl);
      });
      deletedUrls.length > 0 && (await deleteFiles(deletedUrls));
      blogES.imageUrls = imgUrls;
      await blogES.save();
    }

    await BlogContent.findByIdAndUpdate(blogContentId, {
      content,
    });

    res
      .status(200)
      .send({ message: `Save blog successfully ${blogContentId}` });
  } catch (error) {
    console.log(error);
  }
};

blogController.viewBlogManagement = async (req, res, next) => {
  try {
    const data = await Blog.find().lean();
    res.render('blog/management', {
      page: 'admin/blog',
      navbars: NAV_BARS,
      columns: BLOG_TABLE,
      data,
    });
  } catch {}
};

blogController.deleteBlog = async (req, res, next) => {
  try {
    const blogId = req.body.blogId;
    const blog = await Blog.findById(blogId);
    if (blog.imageUrl) {
      await deleteFile(blog.imageUrl);
    }
    const blogContent = await BlogContent.findById(blog.blogContent);
    const blogES = await BlogEditorSession.findById(blogContent._id);
    if (blogES) {
      await deleteFiles(blogES.imageUrls);
    }
    await BlogEditorSession.findOneAndDelete({
      blogContentId: blogContent._id,
    });
    await BlogContent.findByIdAndDelete(blog.blogContent);
    await Blog.findByIdAndDelete(blogId);
    res.redirect('/admin/blog');
  } catch (err) {
    console.log(err);
  }
};

blogController.changeActive = async (req, res, next) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findById(blogId).exec();
    await Blog.findByIdAndUpdate(blogId, {
      active: !blog.active,
    });
    res.redirect('/admin/blog');
  } catch (err) {
    console.log(err);
  }
};

blogController.createBlog = async (req, res, next) => {
  const { title, description, tags } = req.body;
  if (req.validationErrors) {
    const values = {
      title,
      description,
    };
    const formError = transformErrorArrayToErrorForm(req.validationErrors);
    res.render('blog/form', {
      navbars: NAV_BARS,
      formError,
      values,
    });
  } else {
    try {
      const file = req.file;
      const imageUrl = file.path;
      const contentBlog = new BlogContent({});
      await contentBlog.save();
      const blog = Blog({
        title,
        description,
        imageUrl,
        tags,
        blogContent: contentBlog._id,
      });
      await blog.save();
      res.redirect('/admin/blog');
    } catch (error) {
      console.log(error);
    }
  }
  // res.render('blog/form');
};

blogController.editBlog = async (req, res, next) => {
  const blogId = req.params.blogId;
  const { title, description } = req.body;
  if (req.validationErrors) {
    const values = {
      title,
      description,
    };
    const formError = transformErrorArrayToErrorForm(req.validationErrors);
    res.render('blog/form', {
      navbars: NAV_BARS,
      formError,
      values,
    });
  } else {
    try {
      const file = req.file;
      let imageUrl = '';
      if (file) {
        await deleteFile(req.body.imageUrl.slice(1)); // remove / on first
        imageUrl = '/' + file.path;
      } else {
        imageUrl = req.body.imageUrl;
      }
      await Blog.findByIdAndUpdate(blogId, {
        title,
        description,
        imageUrl,
      });
      res.redirect('/admin/blog');
    } catch (error) {
      console.log(error);
    }
  }
  // res.render('blog/form');
};

export default blogController;
