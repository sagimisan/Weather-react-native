import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from 'react-native-paper';
import WeatherApi from "../API/WeatherApi"
function Input() {
    const [apiCopm, setApiCopm] = useState(null);
    const [text, setText] = React.useState('');
    function callAPI() {
        setApiCopm(<WeatherApi location={text} />)
    }
    return (
        <View style={styles.main}>
            <TextInput
                style={styles.input}
                label="enter location"
                value={text}
                onChangeText={text => setText(text)}
            />
            <Button
                onPress={callAPI}
                title="get weather"
                color="#000428"
            />
            {apiCopm}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "60%",
        maxWidth: "200px"
    },
    input: {
        marginTop: "30px",
        backgroundColor: "rgba(184, 201, 196, 0.2)",
    }
});

export default Input;
