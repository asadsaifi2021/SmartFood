import React from "react";
import { View, Text, SafeAreaView, Image, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="p-5">
            <Image
        style={
          {
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }
        }
        source={{
        uri: "https://www.smartfood.com/sites/smartfood.com/themes/smartfood/img/logo-footer.png?1"
                    }} />
                <Ionicons name="search-outline" size={32} color="black" />
            </View>
        </SafeAreaView>
  );
};

export default HomeScreen;