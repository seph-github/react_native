import { View, Text, Button } from 'react-native';

function NewScreen({ navigation, route }: any) {
    const { name } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello! {name}</Text>
            <Button
                title="Done"
                onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'Home',
                        // params: { post: postText },
                        merge: true,
                    });
                }}
            />
        </View>
    );
}

export default NewScreen;