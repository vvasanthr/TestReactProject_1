import React from 'react'
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
        <tr>
          <td>{props.name}</td>
          <td>{props.age}</td>
          <td>{props.totMarks}</td>
        </tr>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  totMarks: PropTypes.number,
}

Student.defaultProps = {
name: "default",
age: 0,
totMarks: 0,
}

export default Student

/*
Shortcuts to create a component:
// rafc & rafcp => react arrow functional components (withh prop types) => above one
// rfc & rfcp => react functional components with prop types

import React from 'react'
import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div>
      
    </div>
  )
}

Student.propTypes = {

}

export default Student
*/