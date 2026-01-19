import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontweight: "bold",
  },
});
export default Button;
