import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../store/actions/authActions'
import { signInWithGoogle } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, uid, isAdmin } = this.props;
    console.log('CHECKING SIGNIN', uid,isAdmin)
    if (uid && isAdmin) {
      return <Redirect to='/' />
    } else if (uid && !isAdmin){
      console.log('SIGNINGOUT FROM')
      this.props.signOut();
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-2">Login</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
        <div className='row'>
          <div className="col m12 center-align">
            <button className="btn green" onClick={this.props.signInWithGoogle}>Sign In with Google</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    uid: state.auth.uid,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signInWithGoogle: () => dispatch(signInWithGoogle()),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
