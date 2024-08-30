import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DocumentData } from "firebase/firestore";
import { Colors } from "@/constants/Colors";

interface categoryItemProps {
  category: DocumentData;
  onCategoryPress: (category: any) => void;
}

const CategoryItem = ({ category, onCategoryPress }: categoryItemProps) => {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category.name)}>
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 99,
          marginRight: 16,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 12,
          fontFamily: "outfit-medium",
          marginTop: 4,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
