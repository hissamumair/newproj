import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native"; // Importing necessary components
import { COLORS } from "../database/items";

const Home = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white, // Use COLORS instead of COLOURS
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLORS.white, // Use COLORS instead of COLOURS
            position: "relative",
          }}
        >
          <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />{" "}
          {/* Correct the component name to StatusBar */}
          <Image
            source={require("../../assets/background.png")}
            style={{ position: "absolute", top: 0, left: -100 }}
          />{" "}
          {/* Correct the component name to Image */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
              }}
            >
              <Image
                source={require('../../assets/profile.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: "contain",
                  borderRadius: 500,
                 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
