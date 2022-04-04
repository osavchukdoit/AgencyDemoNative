import React from "react";
import { EnrollmentInfoTop } from "../utils/topComponents/EnrollmentInfoTop";

export const FamilyInfoTop = () => {
  return (
    <EnrollmentInfoTop
      title={"Below is an overview of the info that has been entered"}
      subtitle={
        "Please review any outstanding items and make sure everything is correct"
      }
    />
  );
};
