import React, { useContext } from 'react'
import VotingContext from '../../context/VotingContext'

const Candidato = ({id, name, association, totalVotes, setCandidates}) => {

  const {Voting, userAddress} = useContext(VotingContext);

  const handleVotar = async () => {

    try {
      await Voting.methods.vote(id)
        .send({from:userAddress})
      setCandidates( candidates => candidates.map(candidate => (
        candidate.id === id ? {...candidate, totalVotes: parseInt(candidate.totalVotes) + 1}: candidate
      )));
    } catch (err) {
      console.log(err)
    }
      


  }
  return (
    <div className="card">
      <div className="card__title">{name} <span className='card__title-votes'>{totalVotes} votos</span></div>
      <div className="card__image">
        <img src={`assets/${name.toLowerCase()}.jpg`} alt={name} />
      </div>
      <div className="card__text">
        <div className="card__text-datos">
            <div className="card__text-info">Id: {id}</div>
            <div className="card__text-info">Nombre: {name}</div>
            <div className="card__text-info">Partido: {association}</div>
        </div>
        <div className='card__button'>
        <button onClick={handleVotar} type='button'>Votar</button>
        </div>
      </div>
    </div>
  )
}

export default Candidato
