import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields required");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Invalid email");
      return;
    }

    router.replace("/Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/signup.webp")} style={styles.image} />

      <View style={styles.form}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput placeholder="Full Name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => router.push("/Login")}>Login</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 280 },
  form: { padding: 20, gap: 15 },
  title: { fontSize: 26, fontWeight: "700" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
  },
  button: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "600" },
  footer: { textAlign: "center" },
  link: { fontWeight: "700" },
});
