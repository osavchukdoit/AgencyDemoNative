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

/**
 * Converts milliseconds to years.
 *
 * @param {number} ms milliseconds
 * @returns {number}
 */
export const millisecondsToYears = (ms) => ms / 31536000000;

/**
 * Gets property values by string path.
 *
 * @param {object} o domain object
 * @param {string} s property path
 * @returns {*}
 */
Object.byString = function (o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  const a = s.split(".");
  for (let i = 0, n = a.length; i < n; ++i) {
    let k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};
