import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GhostTipSubAccordion from './ghostTipSubAccordion';

const GhostTipAccordion = (props) => {

    let ghostTipSubAccordions = [];
    var i = 0;
    props.ancillaryEvidence.forEach(function (value) {
            ghostTipSubAccordions.push(<GhostTipSubAccordion key={i} evidence={value.evidence} eventIndex={value.tip} tip={value.tip}/>);
            i++;
        });

    return (
        <div>
            <Accordion>
            <Card>
                    <Card.Header className="phasmo-card-header">
                        <Accordion.Toggle className="phasmo-card-header-btn" as={Button} variant="link" eventKey={props.eventIndex}>
                            {props.name}
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={props.eventIndex}>
                        <Card.Body className="phasmo-card-body">{ghostTipSubAccordions}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};
export default GhostTipAccordion;