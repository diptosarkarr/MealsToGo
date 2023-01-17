import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { RestaurentInfoCard } from "../components/restaurants-info-card.component";

export const RestaurentScreen = () => {
    const SafeArea = styled(SafeAreaView)`
    background-color:${(props) => props.theme.colors.bg.primary}};
    flex:1;
    ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
    `;
    const SearchContainer = styled(View)`
    padding:${(props) => props.theme.space[3]};
    `;
    const RestaurantListContainer = styled(View)`
    flex:1;
    padding:${(props) => props.theme.space[3]};
    `;
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="search" />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurentInfoCard />
            </RestaurantListContainer>
        </SafeArea>
    );
};
