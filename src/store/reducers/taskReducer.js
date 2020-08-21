/*const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}*/

const initState = {}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TASK_SUCCESS':
      console.log('create task success');
      return state;
    case 'CREATE_TASK_ERROR':
      console.log('create task error');
      return state;
    case 'GET_TASKS':
      console.log('POJECTREDUCER', action.mMap)
      return {
        ...state,
        tasks: action.mMap
      }
    default:
      return state;
  }
};

export default taskReducer;