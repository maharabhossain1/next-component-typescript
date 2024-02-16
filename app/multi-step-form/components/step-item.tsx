import { RadioCircleCheckedIcon } from '@/icons';
import React from 'react';

type StepState = 'complete' | 'current' | 'disabled';

interface StepItemProps {
  state: StepState;
  title: string;
  step: number;
  icon: JSX.Element;
}

const StepItem = ({ state, title, step, icon }: StepItemProps) => {
  const getStepStyles = (state: StepState) => {
    switch (state) {
      case 'complete':
        return 'text-neutral-900 bg-neutral border-neutral-200';
      case 'current':
        return 'text-indigo-700 bg-indigo-100 font-semibold border-indigo-100';
      case 'disabled':
        return 'text-neutral-400 bg-neutral border-neutral-100';
    }
  };
  return (
    <div
      className={`flex w-full cursor-default items-center gap-2 rounded border px-2 py-1.5 transition-all duration-150 ${getStepStyles(state)}`}
    >
      <div>
        {state === 'complete' ? <RadioCircleCheckedIcon className="text-green-600" /> : icon}
      </div>
      <p className="text-sm">
        {step}. {title}
      </p>
    </div>
  );
};

export default StepItem;
