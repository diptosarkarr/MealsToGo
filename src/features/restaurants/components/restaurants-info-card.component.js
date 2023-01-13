/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurentInfoCard = ({ restaurant = {} }) => {
    const {
        name = "some restaurant",
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = "4",
        isClosedTemporarily
    } = restaurant;
    return (
        <Card>
            <Card.Cover key={name} source={{ uri: photos[0] }} />
            <Card.Title title={name} subtitle={address} />
        </Card>
    )
};