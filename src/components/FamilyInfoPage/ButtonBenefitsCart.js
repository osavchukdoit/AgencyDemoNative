import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import CartSvg from "../../assets/icons/familyInfoIcons/shoppingCart.svg";

export const ButtonBenefitsCart = () => {
  return (
    <TouchableOpacity style={styles.buttonCartWrapper}>
      <Text style={styles.buttonCartText}>BenefitsCart</Text>
      <View style={styles.wrapperIconAndPrice}>
        <CartSvg />
        <Text style={styles.buttonCartPrice}>$0.00</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCartWrapper: {
    width: 95,
    height: 51,
    paddingVertical: 6,
    paddingHorizontal: 11,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 15,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: 0.1,
    borderRadius: 15,
    position: "absolute",
    bottom: 154,
    right: 20,
  },

  buttonCartText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    color: THEME.COLOR.WHITE,
    fontSize: 12,
    lineHeight: 16,
  },

  wrapperIconAndPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonCartPrice: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },
});
