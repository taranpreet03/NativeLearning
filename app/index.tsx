import { View, Text, ScrollView, FlatList } from "react-native";
import Button from "@/Component/Button";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>

       <Text style={{ fontSize: 26, fontWeight: "700" }}>OM_1 Logistics</Text>
       <Button title="Login" onPress={() => router.navigate("/Login")} /> 
       <Button title="Signup" onPress={() => router.navigate("/Signup")} />



    {/* Scroll */}
    {/* <ScrollView horizontal 
    contentContainerStyle={{marginTop:40,padding:20}}
    > 
      {[1,2,3,4,5,6,7,66,44,53,24,32,2323].map((item,index)=>{
        return(
          <View key={`${item}-${index}`} 
          style={{
      width:100,
      height:100,
      backgroundColor:"orange",
      marginBottom:20,
      marginRight:20,
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Text style={{fontFamily:"bold"}}>
        {item}
      </Text>
    </View>
        );
      })}
    </ScrollView> */}


{/* FlatList */}
 <View>
    <FlatList
  data={[1,2,3,4,5,6,7,8,9]}
  numColumns={3}
  keyExtractor={(item, index) => `${item}-${index}`}
  renderItem={({ item }) => {
    return (
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
          marginBottom: 20,
          marginRight: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item}</Text>
      </View>
    );
  }}
/>

  </View>

     </View>
    
  );
}
