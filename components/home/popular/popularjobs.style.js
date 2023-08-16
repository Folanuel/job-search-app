import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,    
  },  
  cardContainer: {
    marginRight: SIZES.medium, // Adjust the gap between cards
  },
  cardGap: {
    width: SIZES.small, // Adjust the width of the gap
  },

});

export default styles;
