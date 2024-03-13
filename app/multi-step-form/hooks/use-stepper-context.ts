import { useContext } from "react";
import { StepperContext } from "../context/stepper-context";

export const useStepperContext = () => {
    return useContext(StepperContext);
};