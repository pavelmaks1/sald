import uuid from 'uuid';
import database, { name } from '../firebase/firebase';

export const addPost = (post) => ({
  type: 'ADD_POST',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const name = getState().auth.name;
    console.log(getState());
    const {
      description = '',
      note = '',
      createdAt = 0,
      author_id = uid,
      author_name = name
    } = postData;
    const post = { description, note, createdAt, author_name, author_id };
    
    return database.ref(`posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }));
    });
  };
};

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const startRemovePost = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removePost({ id }));
    });
  }
};

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`posts/${id}`).update(updates).then(() => {
      dispatch(editPost(id, updates));
    });
  };
}

export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts
});

export const startSetAllPosts = () => {
  return (dispatch, getState) => {
    return database.ref(`posts`).once('value').then(
      (snapshot) => {
        const posts = [];
        
        snapshot.forEach(element => {
          posts.push({
            id: element.key,
            ...element.val()
          });
        });

        dispatch(setPosts(posts));
      }
    )
  }
}

// export const startSetPosts = () => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
//       const posts = [];

//       snapshot.forEach(element => {
//         posts.push({
//           id: element.key,
//           ...element.val()
//         })
//       })

//       dispatch(setPosts(posts))
//     })
//   }
// }