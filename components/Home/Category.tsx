import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { db } from "@/configs/firebaseConfigs";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const [categoryList, setCategoryList] = useState<DocumentData[]>([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnaphot = await getDocs(q);
    querySnaphot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Category
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit-medium",
            color: Colors.PRIMARY,
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        style={{ marginLeft: 20 }}
        renderItem={({ item, index }) => (
          <CategoryItem key={index} category={item} onCategoryPress={(category)=>{console.log(category);
          }} />
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
