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

  const handleCompletedStep = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps((prev) => [...prev, step]);
    }
  };
  console.log(completedSteps);

  return (
    <div>
      StepTracker
      <div className="flex w-full items-center gap-2">
        {STEPS.map((item) => {
          const { id, title, icon } = item;
          const state = completedSteps.includes(id)
            ? 'complete'
            : item.id === currentStep
              ? 'current'
              : 'disabled';

          return (
            <>
              <StepItem key={id} step={id} state={state} title={title} icon={icon} />
              {id !== STEPS.length && (
                <div>
                  <RightChevronIcon className=" text-neutral-400" />
                </div>
              )}
            </>
          );
        })}
      </div>
      <div>
        <Button type="button" onClick={() => setCurrentStep((prev) => prev - 1)}>
          back
        </Button>
        <Button
          type="button"
          onClick={() => {
            handleCompletedStep(currentStep);
            setCurrentStep((prev) => prev + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTracker;
