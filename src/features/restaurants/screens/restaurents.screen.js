import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { RestaurentInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
const SafeArea = styled(SafeAreaView)`
    background-color:${(props) => props.theme.colors.bg.primary}};
    flex:1;
    `;
const SearchContainer = styled(View)`
    padding:${(props) => props.theme.space[3]};
    `;
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },

})``;
export const RestaurentScreen = () => {

    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="search" />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    console.log(item)

                    return (
                        <Spacer position="bottom" size="large">
                            <RestaurentInfoCard restaurant={item} />
                        </Spacer>

                    )
                }}
                keyExtractor={(item) => item.name}


            />

        </SafeArea>
    );
};
