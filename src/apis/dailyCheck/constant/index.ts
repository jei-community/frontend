/** 요청 타입 */
export const ACTION = {
  TODAY: 'getTodayData',
  UPDATE_CELL: 'postCellForUser',
  UPDATE_NOTE: 'postNoteForUser',
};
/** google script url */
export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzmIWJcRgn3fMuSOBNY5MvTm1w1Op8c6MtSGupfN_MbgAMXx6QPFtl4dVXNypAaSVA59g/exec';

/** 요청 헤더 */
export const HEADER = {
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
  },
};

//TODO(지애) : 파일 id 수정 필요 (현재 테스트 파일 id)
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
