import React, { useContext } from 'react'
import VotingContext from '../../context/VotingContext'

const Navbar = () => {
    const {userAddress} = useContext(VotingContext);


  return (
    <div className='navbar'>
      <div className='navbar__title'>
        VOTEAPP
      </div>
      <div>
        {
            userAddress ? <span>User:{userAddress}</span> : <span>No conectado</span>
        }
      </div>
    </div>
  )
}

export default Navbar
