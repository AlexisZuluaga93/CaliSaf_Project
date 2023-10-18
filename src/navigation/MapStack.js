import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {MapsScreen}from '../screens/MapsScreen'
import {screen} from '../utils'

const Stack = createNativeStackNavigator();

export function MapStack (){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.map.map}
            component={MapsScreen}
            options={{title:"Por definir"
        
            }}
            />
        </Stack.Navigator>
    )
}


