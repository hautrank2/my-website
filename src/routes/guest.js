import express from 'express';
import blogController from '~/controllers/blog';
import momentController from '~/controllers/moment';
import personalController from '~/controllers/personalController';

const guestRouter = express.Router();

guestRouter.get('/', blogController.viewHome);
guestRouter.get('/blog', blogController.viewBlog);
guestRouter.get('/blog/view/:blogId', blogController.viewBlogContent);

guestRouter.get('/about', personalController.viewabout);
guestRouter.get('/moment', momentController.viewMoment);

export default guestRouter;
