'use client';

import React from 'react';
import StepTracker from './components/step-tracker';
import { StepperProvider } from './context/stepper-context';

const MultiStepFormPage = () => {
  return (
    <div>
      <StepperProvider>
        MultiStepFormPage yooo
        <StepTracker />
      </StepperProvider>
    </div>
  );
};

export default MultiStepFormPage;
