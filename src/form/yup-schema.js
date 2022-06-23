import * as Yup from "yup";
import { ssnValidator } from "./ssnValidator";
import { isEmpty } from "lodash";

export const newYupSchema = (conditionalValidationFields = []) => {
  const requiredString = Yup.string().required("The field is required");
  const emailValidation = Yup.string()
    .email("Invalid email")
    .required("The field is required");
  const usPhoneValidation = Yup.string()
    // includes mask symbols
    .min(14, "Invalid phone number")
    .required("The field is required");

  const mandatoryRequired = (propName, requiredType = requiredString) => {
    if (conditionalValidationFields?.includes(propName)) {
      return Yup.string();
    }
    return Yup.string().when(`is${propName}Mandatory`, {
      is: "true",
      then: requiredType,
    });
  };

  const dependentsValidation = Yup.array().of(
    Yup.object().shape({
      relationType: mandatoryRequired("relationType"),
      depFirstName: mandatoryRequired("depFirstName"),
      depMiddleName: mandatoryRequired("depMiddleName"),
      depLastName: mandatoryRequired("depLastName"),
      depDob: mandatoryRequired("depDob"),
      depGender: mandatoryRequired("depGender"),
      depSSN: mandatoryRequired("depSSN", ssnValidator()),
      depCountryCitizenship: mandatoryRequired("depCountryCitizenship"),
      depStateofbirth: mandatoryRequired("depStateofbirth"),
      sameAddressAsEmployee: mandatoryRequired("sameAddressAsEmployee"),
      // temporary unused
      // depDifferentAddress: mandatoryRequired("depDifferentAddress"),
      disabled: mandatoryRequired("disabled"),
      studentStatus: mandatoryRequired("studentStatus"),
      depTobaccoUseInput: mandatoryRequired("depTobaccoUseInput"),
    })
  );

  const employeeValidation = Yup.object().shape({
    // profile info
    firstName: mandatoryRequired("firstName"),
    middleName: mandatoryRequired("middleName"),
    lastName: mandatoryRequired("lastName"),
    dob: mandatoryRequired("dob"),
    gender: mandatoryRequired("gender"),
    SSN: ssnValidator(),
    countryOfCitizenship: mandatoryRequired("countryOfCitizenship"),
    birthState: mandatoryRequired("birthState"),
    email: mandatoryRequired("email", emailValidation),
    mobilePhone: mandatoryRequired("mobilePhone", usPhoneValidation),
    homeAddress: mandatoryRequired("homeAddress"),
    // employment info
    employeeCode: mandatoryRequired("employeeCode"),
    title: mandatoryRequired("title"),
    salary: mandatoryRequired("salary"),
    originalDateOfHire: mandatoryRequired("originalDateOfHire"),
    employeeType: mandatoryRequired("employeeType"),
    employeeClass: mandatoryRequired("employeeClass"),
    location: mandatoryRequired("location"),
    unionname: mandatoryRequired("unionname"),
    // dependents
    dependents: Yup.lazy((dependents) => {
      if (isEmpty(dependents)) {
        return Yup.mixed().notRequired();
      }
      return dependentsValidation;
    }),
  });

  const result = Yup.object().shape({
    employee: employeeValidation,
  });
  return result;
};
