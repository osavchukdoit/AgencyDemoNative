import { showMessage } from "react-native-flash-message";
import { CONSTANTS } from "../constants";

export const showInfoMessage = (infoMessage, infoDescription = "") => {
  showMessage({
    message: infoMessage,
    description: infoDescription,
    type: "info",
    duration: CONSTANTS.FLASH_MESSAGE_DURATION,
  });
};

export const showWarningMessage = (warningMessage, warningDescription = "") => {
  showMessage({
    message: warningMessage,
    description: warningDescription,
    type: "warning",
    duration: CONSTANTS.FLASH_MESSAGE_DURATION,
  });
};

export const showDangerMessage = (dangerMessage, dangerDescription = "") => {
  showMessage({
    message: dangerMessage,
    description: dangerDescription,
    type: "danger",
    duration: CONSTANTS.FLASH_MESSAGE_DURATION,
  });
};

export const showSuccessMessage = (successMessage, successDescription = "") => {
  showMessage({
    message: successMessage,
    description: successDescription,
    type: "success",
    duration: CONSTANTS.FLASH_MESSAGE_DURATION,
  });
};
