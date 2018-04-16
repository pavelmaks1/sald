import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid, name) => ({
  type: 'LOGIN',
  uid,
  name
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const authError = (error) => ({
  type: 'AUTH_ERROR',
  error
});

export const updateUser = (name) => ({
  type: 'UPDATE_USER',
  name
});

export const startUpdateUser = (name) => {
  return (dispatch) => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({
          displayName: name
        })
        dispatch(updateUser(name));
      };
    })

  }
};

// export const startSignUp = (email, password) => {
//   return (dispatch) => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((resp) => {
//         return dispatch(login());
//       })
//       .catch((error) => {
//         return dispatch(authError(error));
//       });
//   }
// };

// export const startSignIn = (email, password) => {
//   return (dispatch) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((resp) => {
//       return dispatch(login());
//     })
//     .catch((error) => {
//       return dispatch(authError(error));
//     })
//   }
// };

// export const startPasswordReset = (email) => {
//   return firebase.auth().sendPasswordResetEmail(email);
// };

// export const startPasswordUpdate = (password) => {
//   return firebase.auth().currentUser.updatePassword(password);
// };

