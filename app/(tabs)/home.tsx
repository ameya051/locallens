import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";
import PopularBusiness from "@/components/Home/PopularBusiness";

const home = () => {
  return (
    <ScrollView>
      <Header />
      <Slider />
      <Category />
      <PopularBusiness />
      <View style={{height:50}}></View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  homeText: {
    fontFamily: "outfit",
    fontSize: 50,
  },
});
