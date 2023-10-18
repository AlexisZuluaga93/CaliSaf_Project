import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from '../utils'
import { SearchAreaStaticsScreen } from "../screens/SearchAreaStaticsScreen";


const Stack = createNativeStackNavigator();

export function SearchStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.search.search}
                component={SearchAreaStaticsScreen}
                options={{
                    title:"Buscar Lugar"
                }}
            />
        </Stack.Navigator>
    )
}