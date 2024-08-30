import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
} from "firebase/firestore";
import { db } from "@/configs/firebaseConfigs";
import PopularBusinessCard from "./PopularBusinessCard";

const PopularBusiness = () => {
  const [businessList, setBusinessList] = useState<DocumentData[]>([]);
  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"), limit(10));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, doc.data()]);
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
          paddingHorizontal: 20,
          marginBottom: 12,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Popular Businesses
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
        data={businessList}
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => (
          <PopularBusinessCard business={item} key={index} />
        )}
      />
    </View>
  );
};

export default PopularBusiness;

const styles = StyleSheet.create({});
