import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
function NextDaysCards(props) {
  return (
    <View style={styles.view}  >
      {props.data.forecast.forecastday.map((data, index) => {
        if (index != 0) {
          return (
            <Card style={styles.cardDiv} >
              <Card.Content style={styles.text} >
                <Title style={{ fontSize: "17px" }}>{data.date}</Title>
                <Paragraph>max: {data.day.maxtemp_c}° - min: {data.day.mintemp_c}°</Paragraph>
                <Paragraph>{data.day.condition.text}</Paragraph>
              </Card.Content>
              <Image style={styles.img} source={{ uri: `https:${data.day.condition.icon}` }} />
              <Card.Actions>
              </Card.Actions>
            </Card>
          )
        }
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "block",
    backgroundColor: "rgb(184 201 196 / 20%)",

  },
  cardDiv: {
    backgroundColor: "none",
    width: "185px"

  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "50px",
    height: "50px",
    margin: "auto",
  }

});

export default NextDaysCards;

;

