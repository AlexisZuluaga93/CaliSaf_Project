import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { ReportsScreen } from "../screens/reports/ReportsScreen";
import { AddReportScreen } from "../screens/reports/AddReportScreen";
import { ReportScreen } from "../components/Reports/ReportScreen";

const Stack = createNativeStackNavigator();

export function ReportsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.reports.reports}
        component={ReportsScreen}
        options={{ title: "Reportes" }}
      />
      <Stack.Screen
        name={screen.reports.addReportScreen}
        component={AddReportScreen}
        options={{ title: "Añadir Reporte" }}
      />

      <Stack.Screen
        name={screen.reports.report}
        component={ReportScreen}
        options={{ title: "Reporte" }}
      />
    </Stack.Navigator>
  );
}
