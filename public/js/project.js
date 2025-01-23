import { addClass, removeClass } from './util.js';
dayjs.extend(window.dayjs_plugin_customParseFormat);

const $ = document.querySelector.bind(document);
const projectPage = $('#projectPage');
const script = $('#projectPageScript');
const data = JSON.parse(script.getAttribute('data'));
const detailContainer = projectPage.querySelector('.project-detail');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('.project-list');
  const listItems = listContainer.querySelectorAll('li');
  listItems.forEach((li, index) => {
    li.addEventListener('click', (event) => {
      const index = li.getAttribute('data-index');
      onDetail(index, () => {
        const className = 'border-foreground/40';
        listItems.forEach((li) => {
          removeClass(li, className);
        });
        addClass(li, className);
      });
    });
  });

  const onDetail = (index, after) => {
    const detail = data[index];
    if (detail) {
      detail.des = [
        {
          label: 'Duration',
          value: `${dayjs(detail.duration[0], 'MM/YYYY').format('MMM YYYY')} - ${dayjs(detail.duration[1], 'MM/YYYY').format('MMM YYYY')}`,
        },
        {
          label: 'Techlogy',
          value: detail.technology.join(', '),
        },
        {
          label: 'Role',
          value: detail.role.join(', '),
        },
        {
          label: 'Partner',
          value: detail.partners,
        },
        {
          label: 'Description',
          value: detail.description,
        },
      ];
      const inner = `
                 <div class="flex items-center gap-4">
        <img src="${detail.logo}" alt="Project_Logo">
        <div class="project-title">
          <h2>${detail.title}</h2>
          <div class="flex items-center gap-2">
            <h5>${detail.subtitle}</h5>
            ${detail.links
              .map(
                (link) => `
              <a href="${link.url}" target="_blank" data-tooltip="${link.name}" class="text-xl text-foreground/70">
                <i class="${link.icon}"></i>
              </a>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
      <div class="project-des mt-4">
        ${detail.des
          .map(
            (item) => `
          <div class="flex flex-row mt-2">
            <div class="basis-2/12">
              <p class="font-semibold">${item.label}</p>
            </div>
            <div class="basis-10/12">
              ${
                item.label === 'Partner'
                  ? item.value
                      .map(
                        (partner) => `
                  <a href="${partner.link}" target="_blank"><p class="text-primary">${partner.name}</p></a>
                `
                      )
                      .join('')
                  : `<p>${item.value}</p>`
              }
            </div>
          </div>
        `
          )
          .join('')}
      </div>
            `;

      detailContainer.innerHTML = inner;

      after();
    }
  };
});
