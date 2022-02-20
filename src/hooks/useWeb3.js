import { useEffect, useState } from 'react';
import Web3 from 'web3';
const useWeb3 = () => {

    const [web3, setWeb3] = useState(null);
    const [error, setError] = useState(false);

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
    useEffect(() => {
        getWeb3Provider();
    }, [])

    return {
        web3,
        error
    }
}

export default useWeb3
