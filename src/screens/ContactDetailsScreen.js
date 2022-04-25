import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AddContactForm } from "../components/contactDetailsPage/AddContactForm";
import { MemberServiceAndContactDetailsSector } from "../components/contactDetailsPage/MemberServiceAndContactDetailsSector";
import { NewContactButton } from "../components/contactDetailsPage/NewContactButton";
import { serviceAndContactsOptions } from "../components/contactDetailsPage/serviceAndContactsOptions";
import { ModalWindow } from "../components/utils/ModalWindow";
import { EnrollmentInfoTop } from "../components/utils/topComponents/EnrollmentInfoTop";

export const ContactDetailsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisible = () => setModalVisible(true);
  const handleModalInvisible = () => setModalVisible(false);
  return (
    <>
      <ModalWindow isVisible={modalVisible}>
        <AddContactForm onCancel={handleModalInvisible}/>
      </ModalWindow>
      <ScrollView stickyHeaderIndices={[0]}>
        <EnrollmentInfoTop
          title={"Below are the contact details for your benefits"}
          subtitle={"Click to edit or add contact info"}
        />
        <View style={styles.wrapper}>
          <NewContactButton onVisible={handleModalVisible} />

          {serviceAndContactsOptions.map((item) => {
            return (
              <MemberServiceAndContactDetailsSector
                key={item.id}
                memberDetails={item}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
