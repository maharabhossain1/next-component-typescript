import { RadioCircleCheckedIcon } from '@/icons';
import React from 'react';

type StepState = 'complete' | 'disabled';

interface StepItemProps {
  state: StepState;
  title: string;
  step: number;
  icon: JSX.Element;
  active: boolean;
}

const StepItem = ({ state, title, step, icon, active }: StepItemProps) => {
  const getStepStyles = () => {
    if (active) {
      return 'text-indigo-700 bg-indigo-100 font-semibold border-indigo-100';
    }
    const styles: Record<StepState, string> = {
      complete: 'text-neutral-900 bg-neutral border-neutral-200',
      disabled: 'text-neutral-400 bg-neutral border-neutral-100'
    };
    return styles[state] || '';
  };

  const renderIcon = () => {
    if (state === 'complete') {
      return <RadioCircleCheckedIcon className="text-green-600" />;
    }
    return icon;
  };

  return (
    <div
      className={`flex w-full cursor-default items-center gap-2 rounded border px-2 py-1.5 transition-all duration-150 ${getStepStyles()}`}
    >
      <div>{renderIcon()}</div>
      <p className="text-sm">
        {step}. {title}
      </p>
    </div>
  );
};

export default StepItem;
