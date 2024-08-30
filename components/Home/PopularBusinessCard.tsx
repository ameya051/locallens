import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DocumentData } from "firebase/firestore";
import { Colors } from "@/constants/Colors";

interface popularBusinessItemProps {
  business: DocumentData;
}

const PopularBusinessCard = ({ business }: popularBusinessItemProps) => {
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: Colors.WHITE,
        borderRadius: 14,
        marginRight: 16,
      }}
    >
      <Image
        style={{ height: 130, width: 200, borderRadius: 8 }}
        source={{ uri: business.image }}
      />
      <View style={{ marginTop: 8, gap: 4 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 12, color: Colors.GRAY }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 16, height: 16 }}
              source={require("@/assets/images/star.png")}
            />
            <Text style={{ fontFamily: "outfit" }}>4.5</Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.WHITE,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 4,
              padding: 3,
              fontSize: 12,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PopularBusinessCard;

const styles = StyleSheet.create({});
