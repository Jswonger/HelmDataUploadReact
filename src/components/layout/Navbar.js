import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { uid, isAdmin } = props;
  const links = uid && isAdmin ? <SignedInLinks /> : null;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">HELM</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    uid: state.auth.uid,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(Navbar)
