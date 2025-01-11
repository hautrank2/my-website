const momentController = {};

momentController.viewMoment = (req, res) => {
  res.render('moment', { page: 'moment' });
};
