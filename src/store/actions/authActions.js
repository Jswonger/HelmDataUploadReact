import firebase from '../../config/fbConfig'

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const fb = firebase;
    
    fb.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(async (resp) => {
      console.log("This is response",resp)
      var uid = resp.user.uid;
      var userInfo = await adminCheck(uid);
      userInfo = {
        ...userInfo,
        uid: uid
      }
      if(userInfo.isAdmin){
        dispatch({ type: 'LOGIN_SUCCESS', userInfo });
      } else{
        var err = {
          ...userInfo,
          message: 'User does not have authorization.'
        }
        console.log(err)
        dispatch({ type: 'LOGIN_ERROR', err });
      }
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signInWithGoogle = () => {
  return async (dispatch, getState) =>{
    var provider = new firebase.auth.GoogleAuthProvider();

    await firebase.auth().signInWithPopup(provider)
    .then(async (resp) => {
      console.log("This is response",resp)
      var uid = resp.user.uid;
      var userInfo = await adminCheck(uid);
      userInfo = {
        ...userInfo,
        uid: uid
      }
      if(userInfo.isAdmin){
        dispatch({ type: 'LOGIN_SUCCESS', userInfo });
      } else{
        var err = {
          ...userInfo,
          message: 'User does not have authorization.'
        }
        console.log(err)
        dispatch({ type: 'LOGIN_ERROR', err });
      }
      var isNewUser = resp.additionalUserInfo.isNewUser;
      if(isNewUser){
        resp.user.delete();
      }
    }).catch((error) => {
      var err = {
        uid: null,
        isAdmin: null,
        message: error.message
      }
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const fb = firebase;

    fb.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

async function adminCheck(uid){
  const fs = firebase.firestore();
  var admin = {
    isAdmin: null
  }
  //console.log('adminCheck: ', uid)
  var docRef = fs.collection('admin').doc(uid)
  await docRef.get().then((doc) => {
    if(doc.exists){
      //console.log('ADMIN DOC EXISTS');
      admin['isAdmin'] = uid;
      //console.log('isAdmin', admin)
    } else{
      //console.log('ADMIN DOC NOT EXISTS')
      admin['isAdmin'] = null;
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
    admin['isAdmin'] = null;
  });
  return admin
}