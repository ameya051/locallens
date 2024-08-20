import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";

const home = () => {
  return (
    <View>
      <Header />
      <Slider />
      <Category />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  homeText: {
    fontFamily: "outfit",
    fontSize: 50,
  },
});
