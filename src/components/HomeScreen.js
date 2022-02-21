import { useContext } from 'react';
import VotingContext from '../context/VotingContext';
import ErrorComponent from './error/ErrorComponent';
import Navbar from './navbar/Navbar';
import VotacionComponent from './votacion/VotacionComponent';


const HomeScreen = () => {
const {error} = useContext(VotingContext)

  return (
    <>
      <Navbar />
      {
          error ? <ErrorComponent /> : <VotacionComponent />
      }
      <footer className='footer' >&copy; All right reserved</footer>
    </>
  )
}

export default HomeScreen
