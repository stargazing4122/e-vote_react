import { useContext, useEffect, useState } from 'react'
import VotingContext from '../context/VotingContext';

const useNumberOfCandidates = () => {

  const {Voting, userAddress} = useContext(VotingContext);
  const [numberOfCandidates, setNumberOfCandidates] = useState(0);

    //obtener el numero de candidatos
    useEffect(() => {
      if (Voting) { 
        Voting.methods
          .topIdCandidate()
          .call({from: userAddress})
          .then(setNumberOfCandidates) 
      }
    }, [Voting])

    return {
      numberOfCandidates
    };

    
}

export default useNumberOfCandidates;