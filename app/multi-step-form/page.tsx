'use client';

import React from 'react';
import StepTracker from './components/step-tracker';
import { useAuth } from '@/context/auth-context';

const MultiStepFormPage = () => {
  const user = useAuth();
  console.log(user);
  return (
    <div>
      MultiStepFormPage yooo
      <StepTracker />
    </div>
  );
};

export default MultiStepFormPage;
