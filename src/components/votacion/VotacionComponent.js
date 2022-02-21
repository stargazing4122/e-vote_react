import useCandidates from '../../hooks/useCandidates';
import Candidato from './Candidato';

const VotacionComponent = () => {

  const {candidates} = useCandidates();

  return (
    <>
      <h2>Elija al candidato de su preferencia</h2>
      <div className='candidates_grid'>
          {
            candidates.map( candidate => (
              <Candidato key={candidate.id} {...candidate}/>
            ))
          }
      </div>
      
    </>
  )
}

export default VotacionComponent
