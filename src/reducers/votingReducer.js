import types from "./types";

const votingReducer = (state, action) => {
    switch (action.type) {
        case types.VOTAR:
            return state.map(candidate => (
                candidate.id === action.payload ? {...candidate, totalVotes: candidate.totalVotes +1 } : candidate
                ))
        default:
            return state;
    }
}

export default votingReducer;