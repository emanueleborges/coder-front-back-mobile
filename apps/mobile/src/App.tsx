import { Text, View } from 'react-native'
import { Soma } from './../../../barbearia/packages/core/src/index';
export default function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Mobile {Soma (10,20)}</Text>
        </View>
    )
}
