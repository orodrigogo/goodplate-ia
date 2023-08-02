import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  percentage: {
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    backgroundColor: "#D5F2E1",
    height: 42,
    width: 42,
    borderRadius: 7,
    textAlign: "center",
    textAlignVertical: "center",
  },
});