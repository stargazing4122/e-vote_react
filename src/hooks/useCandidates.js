import { useContext, useEffect, useState } from "react";
import VotingContext from "../context/VotingContext";
import useNumberOfCandidates from "./useNumberOfCandidates";

const useCandidates = () => {

    const {Voting, userAddress} = useContext(VotingContext);
    const {numberOfCandidates} = useNumberOfCandidates();

    const [candidates, setcandidates] = useState([]);
    //new code
    const getCandidates = async() => {
        const listOfCandidates = [];
        for (let candidateId = 1; candidateId <= numberOfCandidates ; candidateId++) {
            const candidate = await Voting.methods.candidates(candidateId)
            .call({from: userAddress});

            const newCandidate = {
                id: candidateId,
                name: candidate.name,
                association: candidate.association,
                totalVotes: candidate.totalVotes,
            }
            listOfCandidates.push(newCandidate); 
        }
        setcandidates(listOfCandidates);
    }

    useEffect(() => {
        getCandidates()
    }, [numberOfCandidates]);

    return {candidates};

}
export default useCandidates;
//old code
// const listOfCandidates = [];
// for (let candidateId = 1; candidateId <= numberOfCandidates ; candidateId++) {
//     Voting.methods.candidates(candidateId)
//     .call({from: userAddress})
//     .then(candidate => {
//         const newCandidate = {
//             id: candidateId,
//             name: candidate.name,
//             association: candidate.association,
//             totalVotes: candidate.totalVotes,
//         }
//         listOfCandidates.push(newCandidate);
//     });     
// }
// setCandidates(listOfCandidates);