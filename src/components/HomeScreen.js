import { useContext } from 'react';
import VotingContext from '../context/VotingContext';
import ErrorComponent from './error/ErrorComponent';
import VotacionComponent from './votacion/VotacionComponent';


const HomeScreen = () => {
const {error, userAddress} = useContext(VotingContext)

  return (
    <div>
      <h1>Welcome to vote app</h1>
      <p>User: {userAddress}</p>
      {
          error ? <ErrorComponent /> : <VotacionComponent />
      }
    </div>
  )
}

export default HomeScreen
