import * as React from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from '../components/theme/Style'
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }: any) => {
    let [searchText, setSearchText] = useState('');
    const [response, setResponse] = useState([]);
    const [showLoading, setShowLoading] = useState(false);

    const apiKey = '2cfae33b3bb030d6f4c6ff556b9ea18d';



    const fetchData = async () => {

        setShowLoading(true);
        const geoLocatorUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=1&appid=${apiKey}`;
        try {
            const response = await fetch(geoLocatorUrl, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log('result is: ', JSON.stringify(result));

            setResponse(result);
            setShowLoading(false);

            navigation.navigate({
                name: 'Result',
                params: { data: response },
            });

        } catch (e) {
            console.log('inside catch block');
            console.log(e);
            setShowLoading(false);
        }
        setShowLoading(false);
    }




    const loadingUI = () => {
        if (showLoading) {
            return (
                <ActivityIndicator size={"large"} />
            );
        } else {
            return <Text style={Style.searchText}>Search</Text>
        }
    };


    return (
        <View style={Style.body}>
            <View style={Style.topSection}>
                <TextInput placeholder="Search for a City..."
                    style={Style.textArea}
                    onChangeText={setSearchText} />

                <TouchableOpacity onPress={fetchData}>
                    <View style={Style.searchButton}>
                        {loadingUI()}
                    </View>
                </TouchableOpacity>
                {/* <Text>{response[0]["name"] != null ? response[0]["name"] : ''}</Text> */}
            </View>
        </View>
    );
};

export default HomeScreen;