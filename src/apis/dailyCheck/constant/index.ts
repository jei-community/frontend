/** 요청 타입 */
export const ACTION = {
  TODAY: 'getTodayData',
  UPDATE_CELL: 'postCellForUser',
  UPDATE_NOTE: 'postNoteForUser',
};
/** google script url */
export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwh8jAOocSZrmNfqghSkAJ0mCPnpUgPJg2sYiJBzXO9bq6QSkCjp36Nnd4uus3ktIuZDQ/exec';

//TODO(지애) : MATH 이외 요청 url 수정 필요
/** google script sheet config*/
export const SHEET_CONFIG = {
  MATH: {
    title: '재능스스로AI수학',
    id: '1LcComgNJaZsYc_wRXzi62tV3gc3zqh8AdlQXVCRGHvU',
  },
  JINDAN: {
    title: '온라인진단',
    id: '1LcComgNJaZsYc_wRXzi62tV3gc3zqh8AdlQXVCRGHvU',
  },
  COCOBLE: {
    title: '코코블',
    id: '1LcComgNJaZsYc_wRXzi62tV3gc3zqh8AdlQXVCRGHvU',
  },
  ATTENDANCE: {
    title: '재능스스로교실 출결시스템',
    id: '1LcComgNJaZsYc_wRXzi62tV3gc3zqh8AdlQXVCRGHvU',
  },
};
