import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";
const LandingPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    navigation.navigate("profile");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Landing Page</Text>
      <View>
        <TextInput
          placeholder="enter your email"
          editable
          maxLength={40}
          style={{ padding: 10 }}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="enter your password"
          editable
          maxLength={40}
          style={{ padding: 10 }}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LandingPage;
