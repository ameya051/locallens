import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, DocumentData } from "firebase/firestore";
import { db } from "@/configs/firebaseConfigs";

const Slider = () => {
  const [sliderList, setSliderList] = useState<DocumentData[]>([]);

  useEffect(() => {
    getSliderList();
  }, []);

  const getSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text style={styles.sliderTitle}>Special for you</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sliderList}
        style={{ paddingLeft: 20 }}
        renderItem={({ item, index }) => (
          <Image source={{ uri: item.image }} style={styles.sliderImg} />
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderTitle: {
    fontFamily: "outfit-bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 4,
  },
  sliderImg: { width: 300, height: 150, borderRadius: 16, marginRight: 16 },
});
