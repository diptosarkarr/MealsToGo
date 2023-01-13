/* eslint-disable prettier/prettier */
import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { RestaurentInfoCard } from "../components/restaurants-info-card.component";

export const RestaurentScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar placeholder="search" />
            </View>
            <View style={styles.list}>
                <RestaurentInfoCard />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 10,
    },
    list: {
        flex: 1,
        padding: 10,
    },
});
