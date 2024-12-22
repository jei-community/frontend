/** 요청 타입 */
export const ACTION = {
  TODAY: 'getTodayData',
  UPDATE_CELL: 'postCellForUser',
  UPDATE_NOTE: 'postNoteForUser',
};

//TODO(지애) : MATH 이외 요청 url 수정 필요
/** apps script sheet config*/
export const SHEET_CONFIG = {
  MATH: {
    title: '재능스스로AI수학',
    url: 'https://script.google.com/macros/s/AKfycbxT52WKSwAu2OHgWGn9fzGhnq6kB4NBediWo7yAG8OjAHj4KuGxebv2FFBG8iOb1d1y7A/exec',
  },
  JINDAN: {
    title: '온라인진단',
    url: 'https://script.google.com/macros/s/AKfycbxT52WKSwAu2OHgWGn9fzGhnq6kB4NBediWo7yAG8OjAHj4KuGxebv2FFBG8iOb1d1y7A/exec',
  },
  COCOBLE: {
    title: '코코블',
    url: 'https://script.google.com/macros/s/AKfycbxT52WKSwAu2OHgWGn9fzGhnq6kB4NBediWo7yAG8OjAHj4KuGxebv2FFBG8iOb1d1y7A/exec',
  },
  ATTENDANCE: {
    title: '재능스스로교실 출결시스템',
    url: 'https://script.google.com/macros/s/AKfycbxT52WKSwAu2OHgWGn9fzGhnq6kB4NBediWo7yAG8OjAHj4KuGxebv2FFBG8iOb1d1y7A/exec',
  },
};
