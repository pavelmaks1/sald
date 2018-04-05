import database from '../firebase/firebase';

export const addComment = (comment) => ({
  type: 'ADD_COMMENT',
  comment
});

export const startAddComment = (postId, commentData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = 'Guest',
      comment = '',
    } = commentData;
    const comment = { name, comment };
    
    return database.ref(`users/${uid}/posts/${postId}/comments`).push(comment).then((ref) => {
      dispatch(addComment({
        id: ref.key,
        ...comment
      }));
    });
  };
};

// export const removeComment = ({ id } = {}) => ({
//   type: 'REMOVE_POST',
//   id
// });

// export const 