import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../store/actions/taskActions'

class AddTask extends Component {
    state = {
        stringID: this.props.id,
        description: '',
        experience: '',
        type: '',
        id: this.props.id
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
        this.idSetState();
    }

    idSetState = () => {
        const intID = parseInt(this.state.stringID)
        this.setState((prevState) => {
            const updatedState = prevState
            updatedState.id = intID

            return updatedState;
        })
        console.log('this is int', typeof this.state.id)
    }

    setMaxID = () => {
        const maxID = this.props.getMaxID();
        this.setState({
            stringID: maxID
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.id);
        this.props.createTask(this.state);
        this.setState(prevState => {
            const updateState = prevState;
            updateState.stringID = prevState.id + 1;
            updateState.description = '';
            updateState.experience = '';
            updateState.type = '';

            return updateState;
        })

        this.props.getUpdate()
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h6 className="grey-text text-darken-3">Create a New Task</h6>
                    <div className="input-field">
                        <input value={this.state.stringID} type="text" id="stringID" onChange={this.handleChange}></input>
                        <label className='active' htmlFor="stringID">ID</label>
                        <div className="waves-effect waves-light btn" onClick={this.setMaxID}>Get Max ID</div>
                    </div>
                    <div className="input-field">
                        <textarea value={this.state.description} id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="input-field">
                        <input value={this.state.experience} type="text" id='experience' onChange={this.handleChange} />
                        <label htmlFor="experience">Experience</label>
                    </div>
                    <div className="input-field">
                        <input value={this.state.type} type="text" id='type' onChange={this.handleChange} />
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Add/Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      createTask: (task) => dispatch(createTask(task))
    }
}
  
  export default connect(null, mapDispatchToProps)(AddTask)
