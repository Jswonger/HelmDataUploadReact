import React from 'react'

const TaskDetails = ({task}) => {
  return (
    <div className="row">
      <div className="card project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{task.description}</span>
          <p>id: {task.id}</p>
          <p>experience: {task.experience}</p>
          <p>type: {task.type}</p>
        </div>
      </div>
    </div>
    
  )
}

export default TaskDetails
