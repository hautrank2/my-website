import { NAV_BARS } from "~/constants/blog";

const momentController = {};

momentController.viewMoment = (req, res) => {
  res.render('moment', { page: '/moment', navbars: NAV_BARS });
};

export default momentController;
