import { View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { styles } from "./Carousel.styles";
import CarouselSnap, { Pagination } from "react-native-snap-carousel";
import { size } from "lodash";
import { useState } from "react";
export function Carousel(props) {
  const { arrayImages, width, height, hideDots } = props;
  const [activeDotIndex, setActoveDotIndex] = useState(0);

  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={{ height, width }} />;
  };
  const pagination = () => {
    return (
      <Pagination
        dotsLength={size(arrayImages)}
        activeDotIndex={activeDotIndex}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
      />
    );
  };
  return (
    <View style={styles.content}>
      <CarouselSnap
        layout="default"
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => {
          setActoveDotIndex(index);
        }}
      />
      {!hideDots && pagination()}
    </View>
  );
}
