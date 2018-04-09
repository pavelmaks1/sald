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
      note = '',
      author_id = uid
    } = commentData;
    const comment = { name, note, author_id };

    return database.ref(`posts/${postId}/comments`).push(comment).then((ref) => {
      dispatch(addComment({
        id: ref.key,
        author_id: uid,
        ...comment
      }));
    });
  };
};

export const setComments = (comments) => ({
  type: 'SET_COMMENTS',
  comments
});

export const startSetComments = (postId) => {
  return (dispatch, getState) => {
    return database.ref(`posts/${postId}/comments`).once('value').then(
      (snapshot) => {
        const comments = [];
        
        snapshot.forEach(element => {
          comments.push({
            id: element.key,
            ...element.val()
          });
        });
        dispatch(setComments(comments));
      }
    )

  }
}

export const removeComment = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveComment = (postId, { id } = {}) => {
  return (dispatch, getState) => {
    return database.ref(`posts/${postId}/comments/${id}`).remove().then(() => {
      dispatch(removeComment({ id }));
    });
  };
};