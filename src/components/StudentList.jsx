import Student from './Student.jsx';

function StudentList(){
    return (
    <>
    <div className="student">
      <table>
        <thead>
        <tr>
          <th>Name::</th>
          <th>Age::</th>
          <th>TotalMarks::</th>
        </tr>
        </thead>
        <tbody>
        <Student name="teststu1" age={25} totMarks={900}/>
        <Student name="teststu2" age={30} totMarks={800}/>
        <Student name="teststu3" age={28} totMarks={3}/>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default StudentList;