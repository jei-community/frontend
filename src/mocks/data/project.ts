import { ProjectDetails, ProjectList } from '@/types/project';

export const techStacks = Array.from({ length: 20 }, () => ({
  url: 'data:image/png;base64,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',
  tag: 'tech stack',
}));

export const members = Array.from({ length: 20 }, () => ({ name: '전증훈', position: '연구원' }));

const projectItems: Omit<ProjectDetails, 'metadata'>[] = Array.from({ length: 6 }, (_, index) => {
  return {
    id: String(Math.round(Math.random() * 100)),
    title: 'EVERYDEI' + index,
    status: 'LIVE',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sedut. Amet a diam purus vitae ipsum eleifend mi quisque tortor. Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreeteget sollicitudin. Id vestibulum arcu molestie mauris suspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a anteet. Sed vulputate consectetur lorem rhoncus tempus tempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatisdonec vulputate magnis enim lobortis. Elementum egestas neque venenatis nunc. Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissimcondimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sed ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor.Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreet eget sollicitudin. Id vestibulum arcu molestie maurissuspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a ante et. Sed vulputate consectetur lorem rhoncus tempustempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatis donec vulputate magnis enim lobortis. Elementumegestas neque venenatis nunc',
    startDate: '2024. 00. 00',
    endDate: '2024. 00. 00',
    thumbnailImageUrl: 'https://via.placeholder.com/312',
  };
});

const myProjectItems: Omit<ProjectDetails, 'metadata'>[] = Array.from({ length: 6 }, (_, index) => {
  return {
    id: String(Math.round(Math.random() * 100)),
    title: 'EVERYDEI' + index,
    status: 'STOP',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sedut. Amet a diam purus vitae ipsum eleifend mi quisque tortor. Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreeteget sollicitudin. Id vestibulum arcu molestie mauris suspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a anteet. Sed vulputate consectetur lorem rhoncus tempus tempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatisdonec vulputate magnis enim lobortis. Elementum egestas neque venenatis nunc. Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissimcondimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sed ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor.Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreet eget sollicitudin. Id vestibulum arcu molestie maurissuspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a ante et. Sed vulputate consectetur lorem rhoncus tempustempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatis donec vulputate magnis enim lobortis. Elementumegestas neque venenatis nunc',
    startDate: '2024. 00. 00',
    endDate: '2024. 00. 00',
    thumbnailImageUrl: 'https://via.placeholder.com/312',
  };
});

export const mockProjectList: ProjectList = {
  data: projectItems,

  pagination: {
    totalCount: 1,
    page: 1,
    limit: 6,
    hasNext: false,
  },
};

export const mockMyProjectList: ProjectList = {
  data: myProjectItems,

  pagination: {
    totalCount: 1,
    page: 1,
    limit: 6,
    hasNext: false,
  },
};

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
  thumbnailImageUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX////uHCUAAAD+/v7vGyPtGybXChXrHR753d7uGifPJDHqtLnqAAPnAADvztLpAAvomp339/f96e/XGx+xsbHusLS/v7/e3t4uLi5QUFDQ0NB4eHjt7e2BgYFXV1fk5OT77vE+Pj7UFyPcLzv20tEjIyPgY2vuDhmZmZmlpaWwsLCJiYnHx8f//P9/f38SEhJjY2PMAAD+6eXgBw+bm5sbGxvqzsvwzsn26/DsqrHcAAD8zc7AABbiABH80dvpcnbik5LFHC7lKivJNTXzvLnTa23VICzkXWX74urjNkLmfoDZW1jts77tlpXXPkPbfHTopqHVSFDjd4LNPkTir6vXn5/gfYsuih3VAAAMpElEQVR4nO2cCUPbOBbHZSRjMhzBHAkkIYRMaDhiCqSUbZh0Ot0eO8x2djrb9vt/lNUt2ZYPEjtgVv/daWJHkfTT0/H05ACAlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWV1QIFMz+CMC3RrJnnTjGvIJOhZHGfvAQPh4QsBy2zeIrAWHTBYoC914ON1xtRsdJJRfyNjdvYx2kakP9uX/dkFq9vB9E0r2//EZQPSIoHAXgzWY9p7eqa1y8AK1eGBNm6ugOiG/yyFv94sgoWQ4hL2Z0OXeRqQo4z7PcAqx4mXOafOlgijXhvuuc6CNXQ1YAi4E4a/DREIhVJQt6j9YURAkyIHClSC89xh/0tTggpoaMTRemi93B2+BvLAzZ8MSIm9Dwn1Bq1tVWwgHFoIGRVrSFJCKAkzCtKiBRh8JNHeobejjW0trogQBMhbuEaJhQpZiJEkhAwwkgRaG0xvTSBEA+jLMKsXhomHGID1moiDU239m0RhGzV263XQgh0otjeEmnwOPRqD7KhU3PwTKMI4U9ebBws0IaE0LWElvAZEmZOrqjqhNEaGxCrTYgyCStvw+feS13q9qTQIYf5pbCihMJBqdVcs0ga7+ptdQnxPIPQtE41xapHxO5UmRDvEzzn180vm6l6twUrS0isuP4hX+b0TRUJnfVdEccyKwiCihPWd/Nv0atJiHtp7gpWk5DYMHcplSW0NpSlWMISZQnB/zlhWg31D58jYfjUrpKExC9N5hM5i+vKEeLE3vRNL0NVJiQ2dPvb/SRtY/V/u5ZGrh6hh/A23huiNA23r2GVCUkEwyQSviHCad5XmRAhFqMRTC6nU+dQyHPeV7mX6gFh/XSN0VM5lLC60UTSUVNEz3gr3UtzyEUyA0tYWcL3lvApE6LskxncS68tYRGEmTmUReguzIaUAMbuSPaZCbO0MBtC/hinQXMQYi/G1Y+BterTt2TRXwxh2rmCSjHT2ROSDxtGvDb5rBR/MK5cQhZnKIHQYUZkHlpc5L63mN0TG4YxNhjMSYiTe+9/Ttc/txZASB/RNtwFc9qQqJ55fggXQgg3Xhj0sadNNLMTptZPGwolEmIL7q4P4yJDRJYOyjkhBdpqXOqKT54drTn0CV0mMkd82tJKn50wfzVK7KVgdeo6sQ16/1o1MCcMlV6hqD6xYTohZITh0itESJ5wdpGJMNJLY4ROZQhXUwhZ8L3SNiQrwTTymDypfp/MpcxhJWv/h3rENcGTE0mTRoj0udRUsn6/zHEY7I69Wjh31xkurzC4gP4LNuux8tlYzSbM8H3LjybiuXTshAkRXjjGvP3ZtgO8GEbr79bQpx4QPwhJWQ8Tio16v2X6pXfTCKFTq3nDz4FoZIz5rzGKbGhJK/zuwxRCV674YaKQ97uIiDAEW2O3Fh6HeNFHkw/QJ3C4GwfgVy9qH+JYf5YPFhqj+i59Yogr4I94BVwLtWFv24saCLk1rz8QVQOb0ygg2cZO79MIHUoYOgU1lL0IQtyafwy9WEwFW7H/b7bD6N1PDJFC5EzfiGGWtFp8GWwMErSx8fbtxsagtxBC8MWLdUKKMP7zy+3th/8sD017WOQurwTJ45CsP8hbT/zd5YRK/MKy7B3wYOyYEHFnra+vrw2ZKx7jH/4uZ8rZIsK4BRbxnDcZCf6f5sgY4qdHZFzGP6x/gfMSokURws2psXrytDa6VJDPvPFKMYSgZEKKeN03GhGvGrzYuAlr3gtYIUJwP/Xow/Wm8Ra+h+hPWfF2eTxQ68AMhMgN/8KyZEJsxNhvVJMIHbIV9tD0I6gUIfxrirCrlqdm/Bie7T0qRAixa+0lBG9jhJ5bm3wD2p90eOKE1P2FvZ+HNEidq3Ju/W/IXctZCeO/sIw1b4GEtKaDZdeL+qcGkYnGG38Oec1PnZD7/vBu2YsFM4yEzvBrDwb+vIQuIwRixS+LUAJiK/aH7zN7Ka7Y5EUQsiCpxcMJXW5DkUeJhOKUAq8ZX6csIkzGI1kW5NM9pPfSUDGu1fg+urejNkSpDwgZHxpy0Zj/do381YihKlBEpos8x2d29N8ts+WcLYKIH2aS/2p4k4wdODT9hLe1Pgz93ZiAEDqxmGtIsVM26s+P7xQh8zhC6Qp9UiFgPfX26xjhnug6ugPg0mti2en4vheaRVnzBHBlWzsNzSUS6XGvNBuSThD6AWbBz2KIbgdXCSMif4yGjRbXEX9PZljf/vstYMGpUCCUEF5Ff0KZS5O3rKlwpr/U16KfrhX5dzG0oQUH9/3JELGR51FKPLMP16b/fXMNIgNQfnnre/pPKRN+YLm5xTLD/5gyeLeSFgOZEZBm6Q/e/bE9WZ9Op/SkbTIZf/r414p2VBz/dv7odqxc9sb4cXI0crai2LoRkPgaply5+/Z988ePH5vfV+96QRBtheiXk57nSJB2us5yMH4/KI6QVhQwU/CsQyczqnyWwtg8DyssfASc0DWK5OOZquIM7f58FGtMw81npGdmPSsrK6tHE4y9K3h6Va6b8DtKFQRhx0U7qQXCySq4xMU6F7wIVZQqUt0ovECoXxWZuyoh1oTGN6HXB+WZbB5612+cXx512yfNMhowfsunUq+STN1Iq0RGDcMf07w67SWhvUbBZoSi2krgkBa1DwArtyE90yarxGl6Mxuy1BWpP7k6W9K17xdsxs5SRIdmQqgTpuSH0+1Es9R1FjIiYbmI1aDA+ExOQhAhTBNO3MhNSADP42k6hSLmIBTKRQgyCHdCzQHByJDmqNBV8ZEJobh/fHF20hUXp8VNN7AwQs1DSB2HO7pxIDhd0jM9POKXhRHibDr73W6XZ3yE3+53ZiLUl5ARyTKmffbts7ATyEseiQz2teuCCOkrn69P6MWMvVS5PubPm3Ebyh50IH0EdWN+OlEtqFrymF5nEbZ3TDrtaD6QyZdpGXqpmGc60qvghR4VRchjlnIs0pUoizBBI+kZmDuYkfBMtSyvEBvEN8W6NWryO1WEUg8glO1mkpHwVFhMEjKrviw4Fnwpark/H2FqrbJsyDvAjrhTICD0VTWxN5FECMsg5OOwKU+/eGsXNg5ZzVs6TooNW0tpkr0UygEpi4BmQrxrYjcv5S6Rt+J5sRt9zTO8BCDRhtBvpKmjxiFUe2gor42EYv07FfvEG3bdKvTUCRyTPPdYWb4gfLl/dCwJk3av0bw0QP5WwYQI5SIiJrl2h6QSV0cyalMEISe6eMUaTxB2Ad/WNPTa52Ek/56cE2EPonFA3hz4BkL2nX3RV7rt9o1435L5zY1IsmAzdqPFB4BxPcTpWjd76bqRe2UIXtKv7gFwwKrciRCSIXjyivxPbe+Vjk9fneDPmkVsogghc2h85uUfJxAC4zYnrB1mRFKrY97ZEgkB8BNyUTorgFA5NLgybO/STLBhTkKecYwwPtNkE+4UY0M+us+Ff3Fq9tryEUpJwvMnQMg4Rqp3ztVLnyAhL4jEwNhUZtwf0vXsmMhYF/ZJ4wGEcEHjUC5T+8qajY6JUMzbYnK/bPnQb4mJ8Ei0V35CCEejxmg0YovU0vmIis3B+/R9o1PAYgFEqOuVGpHtNELhuAlHZySvYWj5ykEYzoFnyAi7onZFzKW8LtT15dvEhPWQ1r8tq8lv8Apeyhs5CWX1zYTK75kXUXi6mvu2tJNMCCM8itkPRWpyEh5i8bDVaYdccJe4Sy4yTw9yqtU+ODi44NG7nQtycWYgZDUSYRUeJ6Lf4RVvhrNNJRTVjoX5QiomVKO5yCoGmxTFUDg+T62ZtRHOOIcNs9aL80IC31BjFFGb5DiNIhRfIy8vearQpiiZUFsCMgnnBzQrJyHrp0DaUA2vTMJcK+J5WXyphHwmaIlpRR3XNMVT91CbsxIJ2eYvfRw+AqEymHku5YA0bZTQ18ahTORfkJktpvYj2lDyNOTyx+vdVVvDgzYWG5w3Fxc81oxv8YBet30udsoJ5fuPaEO1wRjxGiofR0afXqb2vSUWOxQZmig7j2dDILfLxC/FfbYp/NIbUVk5BFO0l1o6fFTCcORRkzwqqgKhYT0Mxc5eGep8rpI8fULTiq/FBNVko+lSjSj8kgW4dKNHGdMIy1nxJeGRiZBFCk0WVISHzQxlPWpR+BFiDBEedjqdww6Afoe8CT0Bw1aIPY3vuMU9Pq0NMktIS4J3caLceVlSKiBclniF2NVInFZ1G5EEMMNALI+s8vnrjASZ4nza9iH2KX5tjkajpjlBZgFZpeuv5Yl5naEOmJZWu5izYlD7v5WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZXVA/Q/5Wh8j+8vZU4AAAAASUVORK5CYII=',
};

export const mockProjectConfigurations = {
  configuration: 'ENV1="asdf"\nENV2="qwer"\nENV3="aaaa"',
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
};
