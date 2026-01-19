import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Login.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(e)=>console.log(e)}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.btn} onPress={() => router.navigate("/")}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>
          Don’t have an account?{" "}
          <Text style={styles.link} onPress={() => router.navigate("/Signup")}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  image: { width: "100%", height: 280 },

  card: {
    flex: 1,
    padding: 20,
    gap: 15,
  },

  title: { fontSize: 26, fontWeight: "700" },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
  },

  btn: {
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  btnText: { fontSize: 16, fontWeight: "600" },

  linkText: { textAlign: "center", marginTop: 10 },

  link: { fontWeight: "700" },
});
