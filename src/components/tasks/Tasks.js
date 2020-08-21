import React, { Component } from 'react'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getTask } from '../../store/actions/taskActions'
import AddTask from './AddTask'
import AdminCheck from '../auth/AdminCheck'

class Tasks extends Component {

    getMaxID = () => {
        var maxID = 0;
        this.props.tasks.forEach((task) => maxID = Math.max(maxID,task.id))
        return maxID + 1;
    }

    render() {
        const { tasks } = this.props;

        if(tasks)
            var maxID = this.getMaxID(tasks);

        return (
            <div>
                <AdminCheck />
                {!tasks?
                    <div className='container' >
                        <div className="row ">
                            <h5 className='col m12 s12 center-align'>Tasks are not loaded..</h5>
                        </div>
                        <div className="row">
                            <div className="col m12 s12 center-align">
                                <div className="waves-effect waves-light btn" onClick={this.props.getTask}>Get Tasks</div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='container '>
                        <div className="row">
                            <div className="col m6 s12">
                                <TaskList tasks={tasks} />
                            </div>
                            <div className="col m6 s12">
                                <AddTask id={maxID} getUpdate={this.props.getTask} getMaxID={this.getMaxID}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getTask: () => dispatch(getTask())
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        tasks: state.task.tasks,
    }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)