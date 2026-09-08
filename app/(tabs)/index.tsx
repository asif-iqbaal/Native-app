import { Alert, Button, Text, View } from "react-native";

export default function Index() {
  const pressme = () => {
    Alert.alert("Button clicked");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world</Text>
      <View>
        <Text>This is the third Hello World</Text>
      </View>
      <Button title="Click me" onPress={pressme} />
    </View>
  );
}
