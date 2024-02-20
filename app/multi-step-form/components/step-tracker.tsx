'use client';

import React, { useState } from 'react';
import StepItem from './step-item';
import {
  CardAddIcon,
  EditPencilIcon,
  QrScanIcon,
  ReceiptTextIcon,
  RightChevronIcon,
  SparkleIcon
} from '@/icons';
import { Button } from '@/components/ui/button';

interface Step {
  id: number;
  title: string;
  icon: JSX.Element;
}

const STEPS: Step[] = [
  { id: 1, title: 'Welcome', icon: <SparkleIcon /> },
  { id: 2, title: 'Verification', icon: <QrScanIcon /> },
  { id: 3, title: 'Financial Plan', icon: <ReceiptTextIcon /> },
  { id: 4, title: 'Sign Contract', icon: <EditPencilIcon /> },
  { id: 5, title: 'Payment', icon: <CardAddIcon /> }
];

const StepTracker = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCompletedSteps((prev) => [...prev, currentStep]);
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="flex w-full items-center gap-2">
        {STEPS.map(({ id, ...rest }) => {
          const isCompleted = completedSteps.includes(id);
          const state = isCompleted ? 'complete' : 'disabled';
          return (
            <React.Fragment key={id}>
              <StepItem step={id} state={state} active={id === currentStep} {...rest} />
              {id !== STEPS.length && (
                <div>
                  <RightChevronIcon className="text-neutral-400" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <Button type="button" onClick={handleBack} disabled={currentStep === 1}>
          Back
        </Button>
        <Button type="button" onClick={handleNext} disabled={currentStep === STEPS.length}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTracker;
