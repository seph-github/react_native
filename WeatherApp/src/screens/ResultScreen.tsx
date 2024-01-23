import { Text, View } from "react-native";

function ResultScreen({ route }: any) {
    const { data } = route.params;
    return (
        <View>
            <Text>{data}</Text>
        </View>
    );
};

export default ResultScreen;