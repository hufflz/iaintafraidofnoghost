import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import PossibleEvidenceTableRow from './possibleEvidenceTableRow';


const MainContainer = () => {

    const possEvidence = useSelector(state => state.primaryEvidence.possibleEvidence);

    let ghostPossibleEvidence = [];
    var i = 0;
    if (possEvidence.length > 0) {
        possEvidence.forEach(function (value) {
            let possEvidence = [];
            value.possibleEvidence[0].forEach(function (evidence) {
                //console.log(i + ' ' + evidence)
                possEvidence.push(evidence);
            });
            ghostPossibleEvidence.push(
                <PossibleEvidenceTableRow key={i} name={value.name} possibleEvidence={possEvidence} />
            );
            i++;
        });
    }

    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    {ghostPossibleEvidence}
                </tbody>
            </Table>
        </div>
    )
};
export default MainContainer