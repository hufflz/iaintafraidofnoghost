import { phasmoData } from '../../static-data/phasmo-data'
import _ from 'lodash';

const initialState = {
    foundEvidence: ["", "", ""],
    possibleEvidence: [],
    ancillaryEvidence: []
};

const primaryEvidenceReducer = (state = initialState, action) => {
    let copyFoundEvidence = [...state.foundEvidence];
    switch (action.type) {
        case 'ADD_PRIM_EVIDENCE':
            return { ...state, foundEvidence: addToEvidence(copyFoundEvidence, action.payload), possibleEvidence: updatePossibleEvidence(copyFoundEvidence), ancillaryEvidence: updateAncillaryEvidence(copyFoundEvidence) }
        case 'REMOVE_PRIM_EVIDENCE':
            return { ...state, foundEvidence: removeFromEvidence(copyFoundEvidence, action.payload), possibleEvidence: updatePossibleEvidence(copyFoundEvidence), ancillaryEvidence: updateAncillaryEvidence(copyFoundEvidence) }
        default:
            return state;
    }
};
export default primaryEvidenceReducer;

function addToEvidence(foundEvidence, payload) {
    if (!foundEvidence.includes(payload.evidenceName)) {
        foundEvidence.splice(payload.evidenceIndex, 1, payload.evidenceName);
    }
    return foundEvidence;
};

function removeFromEvidence(foundEvidence, payload) {
    if (foundEvidence.includes(payload.evidenceName)) {
        foundEvidence.splice(payload.evidenceIndex, 1, "");
    }
    return foundEvidence;
};

function updatePossibleEvidence(foundEvidence) {
    var sansEmptyValues = foundEvidence.filter(v => v);
    const possibleGhostEvidence = [];
    const filteredData = filterPhasmoDataByMatchingEvidence(foundEvidence);
    if(sansEmptyValues.length === 0){
        return possibleGhostEvidence;
    }
    filteredData.forEach(function(value){
        var difference = value.evidence.filter(x => !sansEmptyValues.includes(x));
        possibleGhostEvidence.push({name: (value.name), possibleEvidence: [difference]});
    });
    return possibleGhostEvidence;
}

function updateAncillaryEvidence(foundEvidence) {
    const possibleGhostEvidence = [];
    const filteredData = filterPhasmoDataByMatchingEvidence(foundEvidence);
    filteredData.forEach(function(value){
        possibleGhostEvidence.push({name: (value.name), ancillaryEvidence: value.ancillaryevidence});
    });
    return possibleGhostEvidence;
}

function filterPhasmoDataByMatchingEvidence(foundEvidence){
    const newArray = [];
    _.filter(phasmoData, function (item) {
        var sansEmptyValues = foundEvidence.filter(value => value);
         if(sansEmptyValues.every(v => item.evidence.includes(v))){
                newArray.push(item);
        } 
    });
    return newArray;
}


