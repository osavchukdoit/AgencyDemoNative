import React from "react";
import {
  StaticText,
  RadioButton,
  DateControl,
  Ssn,
  Picklist,
  UsAddress,
  ControlCheckbox,
  Amount,
  Email,
  UsPhone,
} from "../uiControl";

/**
 * Returns the appropriate UI control component based on the `uiControl` property
 * and passes the field props to the component.
 *
 * @param {object} field form field details containing `propName` and `uiControl`
 * @param {string} personType type of person
 * @returns {JSX.Element}
 */
export const uiControlsFields = (field, personType = "employee") => {
  const { propName, uiControl } = field;
  let resultComponent;

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
      break;
    case "usphone":
      resultComponent = (
        <UsPhone personType={personType} key={propName} {...field} />
      );
      break;
    default:
      resultComponent = null;
  }
  return resultComponent;
};
