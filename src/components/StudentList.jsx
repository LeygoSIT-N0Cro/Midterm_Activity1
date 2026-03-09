import { Link } from "react-router-dom"

function StudentList({ data }) {

  return (
    <div>
      <p>
        {data.name} - {data.course}
        <Link to={`/Student/${data.id}`}> View Details</Link>
      </p>
    </div>
  )
}

export default StudentList