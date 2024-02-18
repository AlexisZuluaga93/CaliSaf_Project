import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen } from "../utils";
import { ReportsStack } from "./ReportsStack";
import { MapStack } from "./MapStack";
import { HeatMapStack } from "./HeatMapStack";
import { AccountStack } from "./AccountStack";
import { DonationStack } from "./DonationStack";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#4DAE18",
        tabBarInactiveTintColor: "#646464",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={screen.reports.tab}
        component={ReportsStack}
        options={{
          title: "Reportes",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("../../assets/img/megafono.png")}
              style={{ height: size, width: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screen.map.tab}
        component={MapStack}
        options={{
          title: "Mapa",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/img/map.png")}
              style={{ height: size + 5, width: size + 5 }}
            />
          ),
        }}
      />
      {/*<Tab.Screen
        name={screen.heatMap.tab}
        component={HeatMapStack}
        options={{
          title: "Mapa de Calor",
          tabBarIcon: ({ color, size }) => (
            <Icon name="thermometer-outline" color={color} size={size} />
          ),
        }}
      />  esto se implementara mas adelante*/}
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{
          title: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/img/account.png")}
              style={{ height: size, width: size }}
            />
          ),
        }}
      />
      {/*  <Tab.Screen
        name={screen.donation.tab}
        component={DonationStack}
        options={{
          title: "Donación",
          tabBarIcon: ({ color, size }) => (
            <Icon name="card-outline" color={color} size={size} />
          ),
        }}
      /> esto se implementara mas adelante*/}
    </Tab.Navigator>
  );
}
