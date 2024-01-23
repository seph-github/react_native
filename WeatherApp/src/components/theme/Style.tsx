import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },

    topSection: {
        flex: 1,
        width: '100%',
        alignItems: "center",
    },

    textArea: {
        padding: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        margin: 16,
        textDecorationColor: 'blue',
        backgroundColor: 'white',
        width: '80%',
    },

    searchButton: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: 'darkturquoise',
        width: 300,
        height: 50,
        borderRadius: 8,
        marginBottom: 10,
    },

    searchText: {
        color: 'white',
        fontSize: 18,
    },

});

export default Style;