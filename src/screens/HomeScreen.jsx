import React from "react";
import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames"

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full flex items-center justify-center`}>
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
        <Text style={tw`text-green-700 text-xl font-extrabold`}>Save your food before it expires!</Text>
      </View>

      <View style={tw`flex justify-center m-16 p-10`}>
      <Pressable style={tw`rounded bg-green-500 py-4 px-12`}>
      <Text style={tw`text-xl text-white`}>Get Started</Text>
    </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;