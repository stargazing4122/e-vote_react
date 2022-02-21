import { useContext } from 'react';
import VotingContext from '../context/VotingContext';
import ErrorComponent from './error/ErrorComponent';
import Navbar from './navbar/Navbar';
import VotacionComponent from './votacion/VotacionComponent';


const HomeScreen = () => {
const {userAddress} = useContext(VotingContext)

  return (
    <>
      <Navbar />
      {
          !userAddress ? <ErrorComponent /> : <VotacionComponent />
      }
      <footer className='footer' >&copy; All right reserved</footer>
    </>
  )
}

export default HomeScreen
