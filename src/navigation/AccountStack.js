import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from '..//utils'
import { AccountScreen } from "../screens/account/AccountScreen";
import { LoginScreen } from "../screens/account/LoginScreen";
import {RegisterScreen} from '../screens/account/RegisterScreen'
const Stack = createNativeStackNavigator();

export function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={screen.account.account}
                component={AccountScreen}
                options={{title:"Perfil"}}
            />
            <Stack.Screen
                name={screen.account.login}
                component={LoginScreen}
                options={{title:"Iniciar Sesion"}}
            />
            <Stack.Screen
                name={screen.account.register}
                component={RegisterScreen}
                options={{title:"Registrarse"}}
            />
        </Stack.Navigator>
    )
}