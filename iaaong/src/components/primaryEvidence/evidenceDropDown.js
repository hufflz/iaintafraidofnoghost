import React from 'react';
import { useDispatch } from 'react-redux'
import { addPrimEvidence } from '../../redux/actions/primaryEvidenceAction';
import Dropdown from 'react-bootstrap/Dropdown';
import { phasmoNamedEvidence } from '../../static-data/phasmo-named-evidence';


const Evidence = (props) => {

  const evidenceDropDowns = [];
  for (const [index, value] of phasmoNamedEvidence.entries()) {
    evidenceDropDowns.push(<Dropdown.Item onClick={() => dispatchAddPrimEvidence(value)} key={index}>{value}</Dropdown.Item>);
  }

  const evidenceIndex = props.evidenceIndex;
  const dispatch = useDispatch();
  const dispatchAddPrimEvidence = (evidenceName) => {
    const payload = { evidenceName, evidenceIndex };
    dispatch(addPrimEvidence(payload))
  };
  return (
    <div>
      <Dropdown className="phasmo-dropdown">
        <Dropdown.Toggle className="phasmo-dropdown-toggle" variant="phamo-btn-dark" id="dropdown-basic">
          Evidence
                  </Dropdown.Toggle>
        <Dropdown.Menu className="phasmo-dropdown-menu">
          {evidenceDropDowns}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Evidence;