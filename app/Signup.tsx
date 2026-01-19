import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Image
        source={require("@/assets/images/signup.webp")}
        style={{ width: "100%", height: 280 }}
        resizeMode="cover"
      />

      <View style={{ padding: 20, gap: 15 }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Create Account</Text>

        <TextInput
          placeholder="Full Name"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            height: 50,
            paddingHorizontal: 15,
          }}
        />

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            height: 50,
            paddingHorizontal: 15,
          }}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            height: 50,
            paddingHorizontal: 15,
          }}
        />

        <TouchableOpacity
          onPress={() => router.navigate("/Login")}
          style={{
            borderWidth: 1,
            height: 50,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Text
            style={{ fontWeight: "700" }}
            onPress={() => router.navigate("/Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
