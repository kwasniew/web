import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDaysDetailsByTimestamp } from '../../utils/calendar';
import RiskTest from './RiskTest';
import Routes from '../../routes';

const RiskTestContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);

  const daysDetails = createDaysDetailsByTimestamp(Object.keys(riskTest));

  const goToDiagnosis = () => {
    history.push({
      pathname: Routes.Diagnosis,
      search: '?p=1'
    });
  };

  const goToHistory = timestamp => history.push(`/risk-test-data/${timestamp}`);

  return (
    <RiskTest
      previousDays={daysDetails}
      onFill={goToDiagnosis}
      goToHistory={goToHistory}
    />
  );
};

export default RiskTestContainer;
