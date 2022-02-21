import React from 'react'
import useContract from '../hooks/useContract';
import VotingContext from './VotingContext'

const ContextProvider = ({children}) => {

    const {web3, Voting, userAddress, error} = useContract();
    return (
        <VotingContext.Provider value={{web3, Voting, userAddress, error}}>
        {
            children
        }
        </VotingContext.Provider>
    )
}

export default ContextProvider
