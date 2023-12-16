import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { GetStarted } from "../screens";

import { APP_NAVIGATION } from "../constants/navigation";

const Stack = createStackNavigator();

const AppNavigation = () => {
  const username = useSelector((state) => state.app.username);

  return username === "" ? (
    <GetStarted />
  ) : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {APP_NAVIGATION.map((stack, index) => (
          <Stack.Screen
            key={`tab-${index}`}
            name={stack.name}
            component={stack.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
