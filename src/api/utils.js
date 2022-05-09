export const unwrapResponse = async (response, responseType = "json") => {
  let result;
  switch (responseType) {
    case "json":
      result = await response.json();
      break;
    case "text":
      result = await response.text();
  }
  return result;
};

/**
 * Returns full name of the `person`.
 *
 * @param {object} person Information about the user
 * @param {string} person.firstName The first name of the user
 * @param {string=} person.middleName The middle name of the user
 * @param {string} person.lastName The last name of the user
 * @returns {string}
 */
export function fullNameOf(person) {
  const { firstName, middleName = "", lastName } = person;
  if (middleName.trim()) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}
