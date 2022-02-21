import React, { useContext, useEffect } from 'react'
import VotingContext from '../../context/VotingContext'
import useCandidates from '../../hooks/useCandidates';
import useNumberOfCandidates from '../../hooks/useNumberOfCandidates';
import Candidato from './Candidato';

const VotacionComponent = () => {

  const { Voting, userAddress } = useContext(VotingContext);
  const {numberOfCandidates} = useNumberOfCandidates();
  const {candidates} = useCandidates();
  console.log(Voting)

  return (
    <>
      <h2>Votacion component</h2>
      <div className='candidates_grid'>
          {
            candidates.map( candidate => (
              <Candidato key={candidate.id} {...candidate}/>
            ))
          }
      </div>
      <h2>hola</h2>
    </>
  )
}

export default VotacionComponent
