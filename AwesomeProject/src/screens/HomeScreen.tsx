import { View, Text, Button } from 'react-native';
import NewScreen from './NewScreen';


function HomeScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Proceed to next screen' onPress={() => { navigation.navigate('New') }} />
        </View>
    );
}

export default HomeScreen;