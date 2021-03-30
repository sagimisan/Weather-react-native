import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import NextDaysCards from "./NextDaysCards";
function ShowData(props) {
  return (
    <View style={{ background: "rgb(184 201 196 / 20%)" , width:"400px",alignItems:"center"}}  >
      <Card style={styles.cardDiv}>
        <Card.Title title={props.data.location.name} subtitle={props.data.location.country} />
        <Card.Content style={styles.text} >
          <Title>{props.data.current.temp_c}°</Title>
          <Paragraph>{props.data.current.condition.text}</Paragraph>
        </Card.Content>
        <Image style={styles.img} source={{ uri: `https:${props.data.current.condition.icon}` }} />
        <Card.Actions>
        </Card.Actions>
      </Card>
      <View >
        <NextDaysCards data={props.data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  cardDiv: {
    backgroundColor: "none",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "150px",
    height: "150px",
    margin: "auto",
  }

});

export default ShowData;

