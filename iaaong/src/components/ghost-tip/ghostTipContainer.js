import React from 'react';
import { useSelector } from 'react-redux';
import GhostTipAccordion from './ghostTipAccordion';

const GhostTipContainer = () => {

    const ancillaryEvidence = useSelector(state => state.primaryEvidence.ancillaryEvidence);

    let ghostTipAccordions = [];
    var i = 0;
    ancillaryEvidence.forEach(function (value) {
        ghostTipAccordions.push(<GhostTipAccordion key={value.name} name={value.name} eventIndex={value.name} ancillaryEvidence={value.ancillaryEvidence} />);
        i++;
    });

    return (
        <div>
            {ghostTipAccordions}
        </div>
    );
};
export default GhostTipContainer;