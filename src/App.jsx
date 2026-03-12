import { useState, useEffect } from 'react'
import MyButton from './components/MyButton'
import { useNavigate, useNavigation } from 'react-router'

function App() {
  const [ count, setCount ] = useState(0)
  const [ provinces, setProvinces ] = useState([
    "Phnom Penh",
    "Kandal"
  ])
  const navigate = useNavigate()

  const increment = () => {
    navigate('/login')
  }

  return (
    <div>
      <button onClick={increment}>
        Click me
      </button>


      {count}

      {provinces.map((val) => (
        <div className='bg-yellow-600 text-white'>
          {val}
        </div>
      ))}

      <input type="text" onChange={(e) => {
        console.log(e.target.value)
      }} />

      <a href="/login">
        To login
      </a>


    </div>
  )
}

export default App