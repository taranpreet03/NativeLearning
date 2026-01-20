import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Invalid email");
      return;
    }

    console.log("Login Email:", email);
    console.log("Login Password:", password);

  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/Login.jpg")} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>

        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />

        <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.linkText}>
          Don't have an account? <Text style={styles.link} onPress={() => router.push("/Signup")}>Sign Up</Text>
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


