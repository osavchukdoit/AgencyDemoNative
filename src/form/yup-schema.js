import * as Yup from "yup";
import { ssnValidator } from "./ssnValidator";

export const newYupSchema = () => {
  const requiredString = Yup.string().required("The field is required");
  const emailValidation = Yup.string()
    .email("Invalid email")
    .required("The field is required");

  const employeeValidation = Yup.object().shape({
    email: emailValidation,
    SSN: ssnValidator(),
  });

  const result = Yup.object().shape({
    employee: employeeValidation,
  });
  return result;
};
