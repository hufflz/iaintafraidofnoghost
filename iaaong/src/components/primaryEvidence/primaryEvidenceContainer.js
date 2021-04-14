import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EvidenceDropDown from './evidenceDropDown';
import EvidenceSelected from './evidenceSelected';


const GhostSelectedEvidenceContainer = () => {

    return (
        <div>
            <Row>
                <Col>
                    <EvidenceDropDown evidenceIndex={1} />
                    <EvidenceSelected selectedEvidenceIndex={1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EvidenceDropDown evidenceIndex={2} />
                    <EvidenceSelected selectedEvidenceIndex={2} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EvidenceDropDown evidenceIndex={3} />
                    <EvidenceSelected selectedEvidenceIndex={3} />
                </Col>
            </Row>
        </div>
    )
}
export default GhostSelectedEvidenceContainer