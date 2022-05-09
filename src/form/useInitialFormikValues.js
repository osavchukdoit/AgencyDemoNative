import React from "react";
import { DEFAULT_EMPLOYEE_VALUES } from "../api/enrollmentsDefault";

export const useInitialFormikValues = () => {
  return {
    employee: {
      ...DEFAULT_EMPLOYEE_VALUES,
    },
    spouse: undefined,
    children: [],
  };
};
