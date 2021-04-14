import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PrimaryEvidenceContainer from './primaryEvidence/primaryEvidenceContainer';
import GhostTipContainer from './ghost-tip/ghostTipContainer';
import PossibleEvidenceContainer from './possibleEvidence/possibleEvidenceContainer'
import iaaong from '../img/iaaong.svg'

const MainContainer = () => {

  return (
    <div>
      <Container fluid>
        <Col>
        <Row className="logo-bar">
            <Image className="phasmo-logo-image" src={iaaong} />
            I ain't afraid of no ghost!
          </Row>
          <Row>
            <Col xs={12} xl={8}>
              <Row>
                <Col xs={5}><PrimaryEvidenceContainer className="set-opaque"/></Col>
                <Col xs={7}><PossibleEvidenceContainer /></Col>
              </Row>
            </Col>
            <Col xs={12} xl={4} >
              <GhostTipContainer />
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  )
};
export default MainContainer;