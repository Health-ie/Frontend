import React from "react";
import { View, Text,Button } from "react-native";
const LandingPage = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Landing Page</Text>
      <View>
    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('profile')}
      />
    </View>
    </View>
  );
};

export default LandingPage;
