import useContract from '../hooks/useContract';
import ErrorComponent from './error/ErrorComponent';
import VotacionComponent from './votacion/VotacionComponent';


const HomeScreen = () => {
    const {web3, Voting, error} = useContract();
    console.log(web3, Voting, error)

  return (
    <div>
      <h1>Welcome to vote app</h1>
      {
          error ? <ErrorComponent /> : <VotacionComponent />
      }
    </div>
  )
}

export default HomeScreen
