import React from 'react'
import './donate.scss'
import Button from '@material-ui/core/Button';

const Donate = () => {
  return (
    <div className='donate'>
      <h2>This is a new kind of book</h2>
      <p>We feel people should be paid for content as we don't want to use ads (just not our thing)</p>
      <p>But we also appreciate that we have no idea how much you value our work</p>
      <p>which is why we allow you to pay whatever you want, whenever you want</p>
      <p>Which means you can access this for free but we like to consider this an efficient form of if you dont like it you get your money back</p>
      <Button variant="contained" color="primary">
          Donate
      </Button>
    </div>
  )
}

export default Donate
