import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from '../utils'
import { MyReportsScreen } from "../screens/MyReportsScreen";


const Stack = createNativeStackNavigator();

export function MyReportsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.myReports.myReports}
                component={MyReportsScreen}
                options={{
                    title:"Mis Reportes"
                }}
            />
        </Stack.Navigator>
    )
}
