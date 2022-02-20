import React, { useEffect, useState } from 'react';
import useWeb3 from '../hooks/useWeb3'
import Web3 from "web3";
import ErrorComponent from './error/ErrorComponent';
import VotacionComponent from './votacion/VotacionComponent';


const HomeScreen = () => {
    const {web3, error} = useWeb3();
    console.log(web3, error)

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
