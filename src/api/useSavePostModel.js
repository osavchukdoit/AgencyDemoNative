import React from "react";
import { authFetch } from "./authFetch";
import { useDispatch, useSelector } from "react-redux";
import { getSavePostUrl } from "../constants";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash";
import { setDomainModel } from "../redux/actions/actionCreator";
import {
  showDangerMessage,
  showInfoMessage,
  showSuccessMessage,
  showWarningMessage,
} from "./showFlashMessage";

/**
 * Save domain user's model.
 *
 * @param {string} savePostUrl POST URL
 * @param {string[]} profileFields array of property names to save
 * @param {string} personType type of person
 * @param {boolean} isDependent is the data to save related to the dependents
 * @param {number} dependentIndex dependent's index
 * @returns {(function(): void)|*|(function(): Promise<boolean|undefined>)}
 */
export const useSavePostModel = (
  savePostUrl,
  profileFields,
  personType,
  isDependent = false,
  dependentIndex = 0
) => {
  const { jwt } = useSelector((state) => state.utils);
  const { id, dependents } = useSelector((state) => state.domain);
  const dispatch = useDispatch();
  const { values, touched } = useFormikContext();
  const personValues = Object.byString(values, personType);
  const touchedPersonFields = Object.byString(touched, personType);
  const touchedPostModel = {};

  if (isEmpty(touchedPersonFields)) {
    return () => {
      console.warn("Touched fields object is empty");
      showWarningMessage("Nothing to submit");
    };
  }

  return async () => {
    const propsToSave = profileFields.map(({ propName }) => propName);
    for (const prop of propsToSave) {
      const propIsTouched = touchedPersonFields[prop];
      if (propIsTouched) {
        touchedPostModel[prop] = personValues[prop];
      }
    }
    showInfoMessage("Submitting");
    let postModel = { id };
    if (isDependent) {
      // const isNewDependent = !dependents[dependentIndex];
      // if (isEmpty(dependents)) {
      //   postModel.dependents = [touchedPostModel];
      // } else if (isNewDependent) {
      //   postModel.dependents[dependentIndex] = touchedPostModel;
      // }
      if (isEmpty(dependents)) {
        postModel.dependents = [touchedPostModel];
      } else {
        // updating existing dependent
        if (isEmpty(dependents[dependentIndex])) {
          postModel.dependents = [...dependents, touchedPostModel];
        } else {
          postModel.dependents = dependents;
          postModel.dependents[dependentIndex] = touchedPostModel;
        }
      }
    } else {
      postModel = { ...postModel, ...touchedPostModel };
    }
    console.info("Saving", postModel);
    const url = getSavePostUrl(savePostUrl);
    const uploadOptions = { body: JSON.stringify(postModel) };
    const response = await authFetch(url, jwt, "POST", uploadOptions);
    const { ResponseMessage } = response;
    ResponseMessage && console.error(ResponseMessage);
    if (ResponseMessage) {
      const { propertyMsg } =
        ResponseMessage.Exception.validationMessages.validationMsg.objectMsg
          .recordMsg;
      const dangerMessage = propertyMsg.map(({ msg }) => msg).join(". ");
      showDangerMessage("Unable to save", dangerMessage);
    } else {
      showSuccessMessage("Saved successfully");
      dispatch(setDomainModel(response));
      return true;
    }
  };
};
