import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Search=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.search_box}>
                    <Ionicons
                        style={styles.search_icon}
                        name={"search"}
                        size={20}
                        color={"#A1A1AA"}
                    />
                    <TextInput
                        placeholder="search"
                        style={styles.input_search}
                    ></TextInput>
                </View>
        </View>

    )

}
const styles= StyleSheet.create({
    container:{

    },
    search_icon: {
        paddingLeft: responsiveHeight(1.3),
        paddingTop: responsiveHeight(1),
    },
    input_search: {
        paddingLeft: responsiveHeight(1),
        paddingTop: responsiveHeight(0.5),
    },
    search_box: {
        flexDirection: "row",
        width: 400,
        height: 43,
        backgroundColor: "#f4f4f5",
        marginTop: responsiveHeight(3),
        marginLeft: responsiveHeight(1),
        borderRadius: 20,
    },

})
export default Search;