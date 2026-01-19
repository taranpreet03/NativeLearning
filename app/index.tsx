import { View, Text } from "react-native";
import Button from "@/Component/Button";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "700" }}>OM_1 Logistics</Text>

      <Button title="Login" onPress={() => router.navigate("/Login")} />
      <Button title="Signup" onPress={() => router.navigate("/Signup")} />
    </View>
  );
}
