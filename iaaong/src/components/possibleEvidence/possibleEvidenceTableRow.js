import React from 'react';
import PossibleEvidenceTableData from './possibleEvidenceTableData';

const PossibleEvidenceTableRow = (props) => {

  let possibleEvidenceTableData = [];
  props.possibleEvidence.forEach(function (value) {
    possibleEvidenceTableData.push(<PossibleEvidenceTableData evidence={value} />);
  });
  return (
    <tr>
      <td className="trGhost">{props.name}</td>
      {possibleEvidenceTableData}
    </tr>
  )
};
export default PossibleEvidenceTableRow;