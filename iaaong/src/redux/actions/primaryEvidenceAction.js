export const addPrimEvidence = payload => {
    return{
        type: 'ADD_PRIM_EVIDENCE',
        payload: payload
    }
}

export const removePrimEvidence = payload => {
    return{
        type: 'REMOVE_PRIM_EVIDENCE',
        payload: payload
    }
}
