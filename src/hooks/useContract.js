import Contract from '../build/contracts/Voting.json';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

const useContract = () => {

    const [web3, setWeb3] = useState(null);
    const [error, setError] = useState(false);
    const [Voting, setVoting] = useState(0);

    const abi = Contract.abi;
    const contractAddress = Contract.networks[5777].address;

    const getWeb3Provider = async() => {

        if(window.ethereum){
            const web3Provider = new Web3(window.ethereum);
            setWeb3(web3Provider);
            try {
                await window.ethereum.enable();
            } catch (error) {
                setError(true);
                console.log(error);
            }
        }
        else if (window.web3){
            const web3Provider = new Web3(window.web3.currentProvider);
            setWeb3(web3Provider);
        }
        else {
            setError(true);
        }
    }

    const getInstanceContract = () => {
        if(web3){
            const contract = new web3.eth.Contract(abi, contractAddress);
            setVoting(contract);
        }
    }
    useEffect(() => {
        getWeb3Provider();
    }, []);

    useEffect(() => {
        getInstanceContract();
    }, [web3]);

    return {
        web3,
        Voting,
        error,

    }

}

export default useContract;
