import * as Yup from "yup";

// Regular expression to check whether string is in "___-__-____" format where "_" is number.
const charactersValidationRegExp = /^\d{3}-\d{2}-\d{4}$/;
export const woolworthWalletFiasco = "078-05-1120";
export const socialSecurityAdministration = "219-09-9999";

/**
 * Splits social security string into parts.
 *
 * @param {string} ssn - social security number in format "___-__-____".
 * @returns {array}
 */
const getSsnParts = (ssn = "") => {
  return ssn.split("-");
};

/**
 * Checks whether the social security number doesn't contain zeros in each part.
 *
 * @param {string} ssn - social security number in format "___-__-____".
 * @returns {boolean}
 */
const hasNoZerosInEachPart = (ssn = "") => {
  const invalidValues = ["000", "00", "0000"];
  const parts = getSsnParts(ssn);
  return parts.every((part) => {
    return !invalidValues.includes(part);
  });
};

/**
 * Checks whether the social security number doesn't begin with 666.
 *
 * @param {string} ssn - social security number in format "___-__-____".
 * @returns {boolean}
 */
const notBeginWith666 = (ssn = "") => {
  const invalidValue = "666";
  const parts = getSsnParts(ssn);
  return !parts[0].includes(invalidValue);
};

/**
 * Checks whether the social security number doesn't begin with values from 900 to 999.
 *
 * @param {string} ssn - social security number in format "___-__-____".
 * @returns {boolean}
 */
const notBeginWithInterval900To999 = (ssn = "") => {
  const invalidInterval = { start: 900, end: 999 };
  const parts = getSsnParts(ssn);
  const firstPart = parseInt(parts[0]);
  return firstPart < invalidInterval.start || firstPart > invalidInterval.end;
};

/**
 * Checks whether the social security number doesn't contain woolworth wallet fiasco.
 *
 * @param {string} ssn - social security number in format "___-__-____".
 * @returns {boolean}
 */
const hasNoWoolworthWalletFiasco = (ssn = "") => woolworthWalletFiasco !== ssn;

/**
 * Checks whether the social security number doesn't contain SSA Advertisement.
 * SSA - Social Security Administration
 *
 * @param {string} ssn - social security number in format "___-__-____".
 * @returns {boolean}
 */
const hasNoSSAAdvertisement = (ssn = "") =>
  socialSecurityAdministration !== ssn;

/**
 * Validates ssn field.
 *
 * @returns {object}
 */
export const ssnValidator = () => {
  return Yup.string()
    .required("The field is required")
    .matches(charactersValidationRegExp, "Invalid SSN")
    .test(
      "hasNoZerosInEachPart",
      "validation.ssn.containsZerosInSpecificGroup",
      hasNoZerosInEachPart
    )
    .test("notBeginWith666", "validation.ssn.beginsWith666", notBeginWith666)
    .test(
      "notBeginWithInterval900To999",
      "validation.ssn.beginsWith900To999",
      notBeginWithInterval900To999
    )
    .test(
      "hasNoWoolworthWalletFiasco",
      "validation.ssn.woolWorthWalletFiasco",
      hasNoWoolworthWalletFiasco
    )
    .test(
      "hasNoSSAAdvertisement",
      "validation.ssn.socialSecurityAdministrationAdvertisement",
      hasNoSSAAdvertisement
    );
};
