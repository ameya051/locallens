import { Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={styles.imgSubContainer}>
        <Image
          source={require("@/assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textSubContainer}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 32,

            textAlign: "center",
          }}
        >
          The Ultimate{" "}
          <Text style={{ color: Colors.PRIMARY }}>
            Community Business Directory
          </Text>{" "}
          App
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            textAlign: "center",
            marginVertical: 4,
            color: Colors.GRAY,
          }}
        >
          Find your favorite business and post your own as well!
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
            }}
          >
            Let's get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imgSubContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 80,
  },
  textSubContainer: {
    backgroundColor: Colors.WHITE,
    marginTop: -10,
    padding: 16,
  },
  image: {
    width: 240,
    height: 480,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: Colors.BLACK,
  },
  loginBtn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    padding: 16,
    marginTop: 24,
  },
});
