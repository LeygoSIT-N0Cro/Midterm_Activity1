import { useState, useEffect } from "react"
import StudentList from "../components/StudentList"

function Students() {

  const [students, setStudents] = useState([])

  const studentData = [
    { id:1, name:"Lin", course:"BSIT" },
    { id:2, name:"Ellen", course:"BSCS" },
    { id:3, name:"Rina", course:"BSIT" },
    { id:4, name:"Burnice", course:"BSIS" },
    { id:5, name:"Jane", course:"BSIT" },
    { id:6, name:"Belle", course:"BSCS" },
    { id:7, name:"Wise", course:"BSIT" },
    { id:8, name:"Astra", course:"BSIS" },
    { id:9, name:"Evilyn", course:"BSIT" },
    { id:10, name:"Vivian", course:"BSCS" }
  ]

  useEffect(() => {
    setStudents(studentData)
  }, [])

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentList key={student.id} data={student} />
      ))}

    </div>
  )
}

export default Students