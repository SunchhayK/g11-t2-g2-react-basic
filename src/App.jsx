import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App