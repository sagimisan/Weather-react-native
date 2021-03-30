import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import ShowData from "../cards/ShowData";

function WeatherApi(props) {
  
  const [data, setData] = useState(null)
  const [lastSearch, setLastSearch] = useState("")
  if (props.location != lastSearch) {
    setLastSearch(props.location)
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: { q: props.location, days: '3' },
      headers: {
        'x-rapidapi-key': 'bda9c39977msh7f9b3c29900a799p172d33jsne7380b915cce',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setData(response.data)
      console.log(data+"dgsdg");

    }).catch(function (error) {
      console.error(error);
    });
  }


  return (
    <View style={styles.container}>
        {data != null ? <ShowData data={data} /> : ""}
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  alignItems:"center",
  justifyContent:"center"
}
});

export default WeatherApi;
