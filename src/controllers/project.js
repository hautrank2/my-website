import { NAV_BARS } from '~/constants/blog';

const projectController = {};

const commonProp = {
  noHeader: true,
};

projectController.viewProject = (req, res) => {
  res.render('project', {
    page: 'project',
    navbars: NAV_BARS,
    data: [],
    ...commonProp,
  });
};

export default projectController;
