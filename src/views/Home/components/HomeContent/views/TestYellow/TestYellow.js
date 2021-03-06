import React from 'react';
import {
  TriageRecommendations,
  Smile,
  TriageRiskInformation,
  TriageInfoBorder,
  MoreInformation,
  MakeDiagnosisButton
} from '../../../index';

const TestYellow = () => {
  return (
    <>
      <Smile />
      <MakeDiagnosisButton />
      <TriageRiskInformation />
      <TriageInfoBorder />
      <TriageRecommendations />
      <MoreInformation />
    </>
  );
};

export default TestYellow;
