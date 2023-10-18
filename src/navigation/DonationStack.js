import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from '../utils'
import { DonationsScreen } from "../screens/DonationsScreen";


const Stack = createNativeStackNavigator();

export function DonationStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.donation.donation}
                component={DonationsScreen}
                options={{title:"Realiza un Aporte"}}
            />
        </Stack.Navigator>
    )
}