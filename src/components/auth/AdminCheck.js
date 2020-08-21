import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const AdminCheck = (props) => {

    var { uid, isAdmin } = props;
    console.log('IS ADMIN',isAdmin)
    
    if(uid && isAdmin){
        return null;
    }

    return (
        <Redirect to='/signin' />
    )
}

const mapStateToProps = (state) => {
    return {
      uid: state.auth.uid,
      isAdmin: state.auth.isAdmin
    }
}

export default compose(
    connect(mapStateToProps))(AdminCheck);
