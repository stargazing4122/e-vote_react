import React from 'react'

const Candidato = ({id, name, association, totalVotes}) => {

  const handleVotar = () => {
    console.log(`Votando por el candidato ${id}`)
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
