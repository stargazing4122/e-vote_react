import useCandidates from '../../hooks/useCandidates';
import Candidato from './Candidato';

const VotacionComponent = () => {

  const {candidates, setCandidates} = useCandidates();

  // const votingInit = () => {
  //   return[
  //     ...candidates
  //   ]
  // }
  // const [candidatesState, candidatesDispatch] = useReducer(votingReducer, [], votingInit);  
  // useEffect(() => {
  //   votingInit();
  // }, [candidates]);
  
  return (
    <>
      <h2>Elija al candidato de su preferencia</h2>
      <div className='candidates_grid'>
          {
            candidates.map( candidate => (
              <Candidato key={candidate.id} {...candidate} setCandidates={setCandidates}/>
            ))
          }
      </div>
      
    </>
  )
}

export default VotacionComponent
