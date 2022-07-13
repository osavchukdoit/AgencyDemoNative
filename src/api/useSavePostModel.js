import React from "react";
import { authFetch } from "./authFetch";
import { useDispatch, useSelector } from "react-redux";
import { getSavePostUrl } from "../constants";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash";
import { setDomainModel } from "../store/actions/actionCreator";
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
 * @param {number} dependentId dependent's ID
 * @returns {(function(): void)|*|(function(): Promise<boolean|undefined>)}
 */
export const useSavePostModel = (
  savePostUrl,
  profileFields,
  personType,
  isDependent = false,
  dependentIndex = 0,
  dependentId
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
      const isNewDependent = !dependents.some(({ id }) => id === dependentId);
      console.log("isNewDependent=", isNewDependent, dependentId);
      if (isNewDependent) {
        // adding new dependent
        postModel = {
          ...postModel,
          dependents: [{ ...touchedPostModel, newMark: true }],
        };
      } else {
        // editing dependent
        postModel = {
          ...postModel,
          dependents: [{ ...touchedPostModel, id: dependentId }],
        };
      }
      //

      // const isNewDependent = !dependents[dependentIndex];
      // if (isEmpty(dependents)) {
      //   postModel.dependents = [touchedPostModel];
      // } else if (isNewDependent) {
      //   postModel.dependents[dependentIndex] = touchedPostModel;
      // }

      // if (isEmpty(dependents)) {
      //   postModel.dependents = [touchedPostModel];
      // } else {
      //   // updating existing dependent
      //   if (isEmpty(dependents[dependentIndex])) {
      //     postModel.dependents = [...dependents, touchedPostModel];
      //   } else {
      //     postModel.dependents = dependents;
      //     postModel.dependents[dependentIndex] = touchedPostModel;
      //   }
      // }
      // postModel = {
      //   ...postModel,
      //   dependents: [{ ...touchedPostModel, newMark: true }]
      // };

      //
      // postModel = {
      //   id: 515057,
      //   dependents: [
      //     {
      //       depCountryCitizenship: "United States",
      //       depDifferentAddress: "1234",
      //       depDob: "01/12/2011",
      //       depFirstName: "Jane",
      //       depGender: "Female",
      //       depLastName: "Brown",
      //       depMiddleName: "Test",
      //       depSSN: "123-76-5654",
      //       depStateofbirth: "AL",
      //       depTobaccoUseInput: "No",
      //       disabled: "false",
      //       relationType: "Child",
      //       sameAddressAsEmployee: true,
      //       studentStatus: "Yes",
      //       newMark: "true"
      //     }
      //   ]
      // }

      // postModel = {
      //   id: 515057,
      //   dependents: [
      //     {
      //       id: 507822,
      //       depDob: "18/12/2006",
      //     }
      //   ]
      // }
      // deleteMark: true
    } else {
      postModel = { ...postModel, ...touchedPostModel };
    }
    console.log("touchedPostModel=", touchedPostModel);
    console.info("Saving", postModel);
    const url = getSavePostUrl(savePostUrl);
    const uploadOptions = { body: JSON.stringify(postModel) };
    console.log("uploadOptions=", uploadOptions);
    const response = await authFetch(url, jwt, "POST", uploadOptions);
    console.log(
      "response=",
      response?.dependents.map(({ id, depFullName, depDob }) => ({
        id,
        depFullName,
        depDob,
      }))
    );
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
