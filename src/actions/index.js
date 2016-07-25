import { SAVE_COMMENT } from './types';

function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload:comment
  }
};

export { saveComment };