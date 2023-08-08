import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, Image, Button } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (

    <SafeAreaView className="bg-white h-full flex items-center justify-center">
      <View>
      <Image
        style={
          {
            width: 400,
            height: 350,
            resizeMode: 'contain',
          }
        }
        source={{
        uri: "https://www.smartfood.com/sites/smartfood.com/themes/smartfood/img/logo-footer.png?1"
      }}/>
      </View>

      <View>
        <Text className="text-green-700 text-xl font-extrabold">Save your food before it expires!</Text>
      </View>

      <View className="flex justify-center m-16 p-10">
        <View className="rounded bg-green-500 text-white py-2 px-10">
        <Button
            title="Get Started"
            color={"#ffff"}
          onPress={() => navigation.navigate("DashboardScreen")}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;