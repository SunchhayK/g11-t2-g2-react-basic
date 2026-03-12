import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

function UserPage() {
  const [ provinces, setProvinces ] = useState([
    "Phnom Penh",
    "Kandal"
  ])
  const navigate = useNavigate()

  useEffect(() => { }, [])

  return (
    <div>
      User Page

      <button onClick={() => {
        navigate('/user')
      }}>To User page</button>

      <a href="/login">To login page</a>

      <p>
        Provinces
      </p>

      <ul>
        {provinces.map((province, key) => (
          <li key={key}>{province}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage