import { useParams } from "react-router-dom"

function StudentDetails() {

  const { id } = useParams()

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

  const student = studentData.find(S => S.id === parseInt(id))

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>
    </div>
  )
}

export default StudentDetails