import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./styles";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <View style={styles.container}>
    <Text>Home screen</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate("Details")}
    />
  </View>
);

export default HomeScreen;
