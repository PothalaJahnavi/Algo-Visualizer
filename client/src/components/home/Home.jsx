import React from 'react'
import './home.css'
import { Link} from 'react-router-dom';
const Home = () => {


  return (
     <div className="head center">
        <div className="contents center">
        <p>Enjoy The New Way To Learn Algorithms</p>
        <h1 className='heading'>ALGORITHM VISUALIZER</h1>
        </div>
        <button className='home-btn'> <Link to="/Sort">Get Started</Link></button>
     </div>
  )
}

export default Home