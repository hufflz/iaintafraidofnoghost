import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removePrimEvidence } from '../../redux/actions/primaryEvidenceAction'
import Alert from 'react-bootstrap/Alert';

const EvidenceSelected = (props) => {

  const alert = {
    width: '100%'
  }

  const evidenceIndex = props.selectedEvidenceIndex;
  const evidenceName = useSelector(state => state.primaryEvidence.foundEvidence[evidenceIndex]);

  const dispatch = useDispatch();
  const dispatchRemovePrimEvidence = () => {
    const payload = { evidenceName, evidenceIndex };
    dispatch(removePrimEvidence(payload))
  };
  return (
    <div>
      <Alert style={alert} onClick={() => dispatchRemovePrimEvidence()}>
        {evidenceName}
      </Alert>
    </div>
  );
};
export default EvidenceSelected;