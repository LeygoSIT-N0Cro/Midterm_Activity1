import { useState, useEffect } from "react"
import StudentList from "../components/StudentList"

function Students() {

  const [Students, setStudents] = useState([])

  const StudentData = [
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
    setStudents(StudentData)
  }, [])

  return (
    <div>
      <h2>Student List</h2>

      {Students.map((Student) => (
        <StudentList key={Student.id} data={Student} />
      ))}

    </div>
  )
}

export default Students