import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { HeatMapScreen } from "../screens/HeatMapScreen";

const Stack = createNativeStackNavigator();

export function HeatMapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.heatMap.heatMap}
        component={HeatMapScreen}
        options={{
          title: "Buscar Lugar",
        }}
      />
    </Stack.Navigator>
  );
}
