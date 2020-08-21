import firebase from '../../config/fbConfig';

export const createTask = (task) => {
  return (dispatch, getState) => {
    // make async call to database
    const firestore = firebase.firestore();
    firestore.collection('task').doc('' + task.id).set({
      id: task.id,
      description: task.description,
      experience: task.experience,
      type: task.type
    }).then(() => {
      dispatch({ type: 'CREATE_TASK_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_TASK_ERROR' }, err);
    });
  }
};

export const getTask = () => {
  var mMap = new Map();
  return async (dispatch, getState) => {
    const firestore = firebase.firestore();
    mMap = (await firestore.collection('task').orderBy("id").get()).docs.map(doc => doc.data());

    dispatch({ type: 'GET_TASKS', mMap })
  }
}