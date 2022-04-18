import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { MemberServiceAndContactDetailsSector } from "../components/contactDetailsPage/MemberServiceAndContactDetailsSector";
import { NewContactButton } from "../components/contactDetailsPage/NewContactButton";
import { serviceAndContactsOptions } from "../components/contactDetailsPage/serviceAndContactsOptions";
import { EnrollmentInfoTop } from "../components/utils/topComponents/EnrollmentInfoTop";

export const ContactDetailsScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <EnrollmentInfoTop
        title={"Below are the contact details for your benefits"}
        subtitle={"Click to edit or add contact info"}
      />
      <View style={styles.wrapper}>
        <NewContactButton />

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
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
