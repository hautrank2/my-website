import { NAV_BARS } from '~/constants/blog';
import { PROJECT_DATA } from '~/constants/project';
import helper from '~/utils/helper';

const projectController = {};

const commonProp = {};

projectController.viewProject = (req, res) => {
  const detailData = PROJECT_DATA[0];
  res.render('project', {
    page: 'project',
    navbars: NAV_BARS,
    data: PROJECT_DATA,
    detail: {
      ...detailData,
      des: [
        {
          label: 'Duration',
          value: `${helper.formatDate(detailData.duration[0], 'MMM YYYY', 'MM/YYYY')} - ${helper.formatDate(detailData.duration[1], 'MMM YYYY', 'MM/YYYY')}`,
        },
        {
          label: 'Techlogy',
          value: detailData.technology.join(', '),
        },
        {
          label: 'Role',
          value: detailData.role.join(', '),
        },
        {
          label: 'Partner',
          value: detailData.partners,
        },
        {
          label: 'Description',
          value: detailData.description,
        },
      ],
    },
    ...commonProp,
  });
};

export default projectController;
