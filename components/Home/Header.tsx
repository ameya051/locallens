import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Image source={{ uri: user?.imageUrl }} style={styles.userAvatar} />
        <View>
          <Text style={{ color: Colors.WHITE }}>Welcome, </Text>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              color: Colors.WHITE,
            }}
          >
            {user?.firstName}
          </Text>
        </View>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: "outfit", fontSize: 16 }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userAvatar: {
    width: 44,
    height: 44,
    borderRadius: 99,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginTop: 16,
  },
});
