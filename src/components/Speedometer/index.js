import {component} from 'react'

import './index.css'

class Speedometer extends component {
  render() {
    return (
      <div className="bg">
        <h1 className="heading"> Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <p>Speed is 0mph</p>
        <p>Min Limit is 0mph,Max Limit is 200mph</p>
        <div>
          <button type="button">Accelerate</button>
          <button type="button">Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
