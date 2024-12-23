import { ProjectDetails } from '@/types/project';

export const techStacks = Array.from({ length: 20 }, () => ({ url: 'https://via.placeholder.com/100', tag: 'tech stack' }));

export const members = Array.from({ length: 20 }, () => ({ name: '전증훈', position: '연구원' }));

export const mockProjectDetails: ProjectDetails = {
  id: '1',
  title: 'EVERYDEI',
  status: 'LIVE',
  description:
    'Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sed ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor. Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreet eget sollicitudin. Id vestibulum arcu molestie mauris suspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a ante et. Sed vulputate consectetur lorem rhoncus tempus tempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatis donec vulputate magnis enim lobortis. Elementum egestas neque venenatis nunc. Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sed ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor. Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreet eget sollicitudin. Id vestibulum arcu molestie mauris suspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a ante et. Sed vulputate consectetur lorem rhoncus tempus tempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatis donec vulputate magnis enim lobortis. Elementum egestas neque venenatis nunc',
  startDate: '2024. 00. 00',
  endDate: '2024. 00. 00',
  metadata: {
    tech: [
      {
        position: 'FRONTEND',
        data: techStacks,
      },
      {
        position: 'BACKEND',
        data: techStacks,
      },
      {
        position: 'INFRA',
        data: techStacks,
      },
    ],
    link: [
      {
        url: ['https://example.com'],
        tag: 'GITLAB',
      },
    ],
  },
  thumbnailImageUrl: 'https://via.placeholder.com/100',
};

export const mockProjectConfigurations = {
  configuration: 'ENV1="asdf"\nENV2="qwer"\nENV3="aaaa"',
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
};
