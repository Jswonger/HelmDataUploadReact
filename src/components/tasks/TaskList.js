import React from 'react'
import TaskDetails from './TaskDetails'

const TaskList = ({tasks}) => {
  return (
    <div className="project-list section">
      { tasks && tasks.map(task => {
        return (
          <div key={task.id}>
            <TaskDetails task={task} />
          </div>
        )
      })}  
    </div>
  )
}

export default TaskList
