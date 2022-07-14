export const CONSTANTS = {
  LOGIN_SCREEN: {
    LOGIN_INPUT: "login",
    PASSWORD_INPUT: "password",
  },
  OS: {
    ios: "ios",
    web: "web",
    android: "android",
  },
  FLASH_MESSAGE_DURATION: 20000,
  STYLES: {
    BASE_FONT_SIZE: 14,
  },
};

export const SERVER_URL = "https://www.aezbenefitsdev2.com";
export const SERVER_API_URL = `${SERVER_URL}/hitf`;
export const GATEWAY_SERVICES_URL = `${SERVER_API_URL}/gateway/services`;
export const LOGIN_URL = `${GATEWAY_SERVICES_URL}/authservice/auth?media=json`;
export const dropdownStaticUrl = (propName) =>
  `${GATEWAY_SERVICES_URL}/appservice/validvalues/${propName}?media=json`;
export const PAGE_DESC_URL = `${GATEWAY_SERVICES_URL}/metadataservice/find/content/PageDesc/EnrollProfile?media=json`;
export const domainModelUrl = (datamodelFindGETURL) =>
  `${SERVER_URL}/${datamodelFindGETURL}`;
export const getSavePostUrl = (savePOSTURL) => `${SERVER_URL}/${savePOSTURL}`;
export const getServerIcon = (iconPath) => `${SERVER_URL}/${iconPath}`;
export const getBpPageBase = (bpName = "EmployeeEnroll2") =>
  `${GATEWAY_SERVICES_URL}/metadataservice/find/content/BPPage/${bpName}?media=json&contextual`;
export const getBPPageUrl = (domainId = 1121) =>
  `${getBpPageBase()}DomainId=${domainId}`;

// export const GOOGLE_API_KEY = "AIzaSyDFypetmaRCy6bzbsEz2__gLPSU3NmqZAM";
export const GOOGLE_API_KEY =
  "611955708014-g4m3a5gv1bvkb45vr7edvfed646in7db.apps.googleusercontent.com";
