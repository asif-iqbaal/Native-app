import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center bg-white">
      <View className="h-16 w-full flex-row items-center justify-between px-4">
        <View className="flex-row items-center">
          {/* <Image
            source={require("../../assets/images/logo.svg")}
            className="h-10 w-10"
            resizeMode="contain"
          /> */}

          <Text className="ml-2 font-bold text-blue-600">Home</Text>
        </View>

        <Ionicons name="person-outline" size={24} />
      </View>
    </View>
  );
}
