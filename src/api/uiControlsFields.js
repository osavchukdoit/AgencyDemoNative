import React from "react";
import { StaticText } from "../uiControl/StaticText";
import { RadioButton } from "../uiControl/RadioButton";
import { DateControl } from "../uiControl/DateControl";
import { Ssn } from "../uiControl/Ssn";
import { Picklist } from "../uiControl/Picklist";
import { UsAddress } from "../uiControl/UsAddress";
import { ControlCheckbox } from "../uiControl/ControlCheckbox";
import { Amount } from "../uiControl/Amount";
import { Email } from "../uiControl/Email";
import { UsPhone } from "../uiControl/UsPhone";

export const uiControlsFields = (field, personType = "employee") => {
  const { propName, displayable, uiControl } = field;
  let resultComponent = null;

  switch (uiControl) {
    case "statictext":
      resultComponent = (
        <StaticText personType={personType} key={propName} {...field} />
      );
      break;
    case "radiobutton":
      resultComponent = (
        <RadioButton personType={personType} key={propName} {...field} />
      );
      break;
    case "date":
      resultComponent = (
        <DateControl personType={personType} key={propName} {...field} />
      );
      break;
    case "ssn":
      resultComponent = (
        <Ssn personType={personType} key={propName} {...field} />
      );
      break;
    case "picklist":
      resultComponent = (
        <Picklist personType={personType} key={propName} {...field} />
      );
      break;
    case "usaddress":
      resultComponent = (
        <UsAddress personType={personType} key={propName} {...field} />
      );
      break;
    case "checkbox":
      resultComponent = (
        <ControlCheckbox personType={personType} key={propName} {...field} />
      );
      break;
    case "amount":
      resultComponent = (
        <Amount personType={personType} key={propName} {...field} />
      );
      break;
    case "email":
      resultComponent = (
        <Email personType={personType} key={propName} {...field} />
      );
    case "usphone":
      resultComponent = (
        <UsPhone personType={personType} key={propName} {...field} />
      );
    default:
      resultComponent = null;
  }
  return resultComponent;
};
