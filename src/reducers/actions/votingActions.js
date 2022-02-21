import types from "../types";


export const doVotar = (candidateId) => ({
    type: types.VOTAR,
    payload: candidateId,
});