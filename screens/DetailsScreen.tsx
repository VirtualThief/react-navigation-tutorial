import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

import styles from "./styles";

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;

type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen = ({ navigation }: DetailsScreenProps) => (
  <View style={styles.container}>
    <Text>Details screen</Text>
    <Button title="Go to details" onPress={() => navigation.push("Details")} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go to the first screen"
      onPress={() => navigation.popToTop()}
    />
    <Button title="Navigate home" onPress={() => navigation.navigate("Home")} />
    <Button title="Push home" onPress={() => navigation.push("Home")} />
  </View>
);

export default DetailsScreen;
