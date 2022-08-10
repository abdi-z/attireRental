import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/attires">Check out Attires</Link>
    </div>
  )
}

export default Home