import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminCheck from '../auth/AdminCheck'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { getTask } from '../../store/actions/taskActions'

class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' /> 
    

    return (
      <div className="dashboard container">
        <AdminCheck />
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <Link to='/tasks' className="card-content white-text" onClick={this.props.getTask}>
                <div className="container">
                  <span className="card-title">Goals</span>
                  <p>Click to add or update Goals</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="disabled card blue-grey darken-1">
              <Link to='/' className="card-content white-text">
                <div className="container">
                  <span className="card-title">Missions</span>
                  <p>Click to add or update Missions</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTask: () => dispatch(getTask())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(Dashboard)

  //
