'use client';

import React from 'react';
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
import { useStepperContext } from '../hooks/use-stepper-context';

interface Step {
  id: number;
  title: string;
  icon: JSX.Element;
}

export const STEPS: Step[] = [
  { id: 1, title: 'Welcome', icon: <SparkleIcon /> },
  { id: 2, title: 'Verification', icon: <QrScanIcon /> },
  { id: 3, title: 'Financial Plan', icon: <ReceiptTextIcon /> },
  { id: 4, title: 'Sign Contract', icon: <EditPencilIcon /> },
  { id: 5, title: 'Payment', icon: <CardAddIcon /> }
];

const StepTracker = () => {
  const { completedSteps, currentStep, handleNextStep, handlePreviousStep } = useStepperContext();

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
        <Button type="button" onClick={handlePreviousStep} disabled={currentStep === 1}>
          Back
        </Button>
        <Button type="button" onClick={handleNextStep} disabled={currentStep === STEPS.length}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTracker;
