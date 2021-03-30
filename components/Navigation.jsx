import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import GetLocation from './location/GetLocation';
import Input from './location/Input';

function Navigation() {
    const [typeOfSearch, setTypeOfSearch] = React.useState(<Input />)
    function location() {
        setTypeOfSearch(<GetLocation />)
    }
    function search() {
        setTypeOfSearch(<Input />)
    }
    return (
        <View>
            <View style={styles.label}>
                <Text style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>Sagi
                <Text style={{ color: "#05f7ff" }}>Weather
                </Text>
                </Text>
                <Text style={{ fontSize: "20px" }} >please choose how to search:</Text>
            </View>
            <Appbar style={styles.links}>
                <View style={styles.choose}>
                    <Appbar.Action icon="crosshairs-gps" onPress={location} color="white"size="20px" />
                    <Text style={styles.text} onPress={location}>by location</Text>
                </View>
                <View style={styles.choose}>
                    <Appbar.Action icon="map-search-outline" onPress={search} color="white" size="20px"/>
                    <Text style={styles.text} onPress={search}>by search</Text>
                </View>
            </Appbar>
            <View style={styles.showData}>
                {typeOfSearch}
            </View>
        </View>
    )
}

export default Navigation;

const styles = StyleSheet.create({
    label: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    choose: {
        margin: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: "15px"
    },
    links: {
        backgroundColor: "rgba(184, 201, 196, 0.2)",
        height: "55px",
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    showData: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
});