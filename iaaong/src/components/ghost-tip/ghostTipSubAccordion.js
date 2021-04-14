import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GhostTipSubAccordion = (props) => {
    console.log(props.tip);
    return (
        <div>
            <Accordion >
            <Card>
                    <Card.Header className="phasmo-card-header">
                        <Accordion.Toggle className="phasmo-card-header-btn" as={Button} variant="link" eventKey={props.eventIndex}>
                            {props.evidence}
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={props.eventIndex}>
                        <Card.Body className="phasmo-card-body">{props.tip}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};
export default GhostTipSubAccordion;