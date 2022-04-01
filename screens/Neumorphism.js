import react from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";
import Slider from "@react-native-community/slider";
import {
  Screen,
  SafeArea,
  View1,
  HeaderArea,
  HeaderTitle,
  SongImageArea,
  SongImage,
  SongArea,
  SongTitle,
  SongArtistTitle,
  TrackArea,
  TrackContainer,
  TimeText,
  TrackControllers,
} from "../screen-components/Neumorphism-component";

import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const gray = "#91a1bd";
const ImageURL =
  "https://cdn.pixabay.com/photo/2018/03/06/06/58/performance-3202707_960_720.jpg";

export const Neumorphism = ({ navigation }) => {
  const NeuMorph = ({ children, size, style }) => {
    return (
      <View
        style={[
          styles.topShadow,
          {
            borderRadius: size / 2 || 20,
          },
        ]}
      >
        <View
          style={[
            styles.bottomShadow,
            {
              borderRadius: size / 2 || 20,
            },
          ]}
        >
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 20,
              },
              style,
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Screen>
      <SafeArea>
        <View1>
          <HeaderArea>
            <NeuMorph size={48}>
              <AntDesign name="arrowleft" size={20} color={gray} />
            </NeuMorph>

            <View>
              <HeaderTitle>PLAYING NOW</HeaderTitle>
            </View>
            <NeuMorph size={48}>
              <Entypo name="menu" size={24} color={gray} />
            </NeuMorph>
          </HeaderArea>
          <SongImageArea>
            <NeuMorph size={300}>
              <SongImage source={{ uri: ImageURL }} />
            </NeuMorph>
          </SongImageArea>

          <SongArea>
            <SongTitle>What A Wonderful World</SongTitle>
            <SongArtistTitle>Louis Armstrong</SongArtistTitle>
          </SongArea>
          <TrackArea>
            <TrackContainer>
              <TimeText>1:21</TimeText>
              <TimeText>2:30</TimeText>
            </TrackContainer>

            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#8aaaff"
              maximumTrackTintColor="#7b9bff"
              thumbTintColor="#8aaaff"
            />
          </TrackArea>
          <TrackControllers>
            <NeuMorph size={60}>
              <MaterialIcons name="fast-rewind" size={24} color={gray} />
            </NeuMorph>
            <NeuMorph
              size={80}
              style={{ backgroundColor: "#8aaaff", borderColor: "#8aaaff" }}
            >
              <MaterialIcons name="pause" size={24} color="#ffffff" />
            </NeuMorph>
            <NeuMorph size={60}>
              <MaterialIcons name="fast-forward" size={24} color={gray} />
            </NeuMorph>
          </TrackControllers>
        </View1>
      </SafeArea>
    </Screen>
  );
};

const styles = StyleSheet.create({
  inner: {
    backgroundColor: "#dee9f7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#e2ecfd",
    borderWidth: 1,
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: -1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF",
    elevation: 25,
    backgroundColor: "#dee9f7",
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: Platform.OS === "android" ? "black" : "#B7C4DD",
    elevation: 25,
    backgroundColor: "#dee9f7",
  },
});
