import { StyleSheet, Text, View } from "react-native";
import { Home, portafoleo, prices, settings, transaccions } from "/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  HeaderShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <view
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="home-outline" size={30} color="black" />
                </view>
              );
            },
          }}
        />
        <Tab.Screen
          name="portafoleo"
          component={portafoleo}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <view
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons name="account-box-outline" size={30} color="black" />
                </view>
              );
            },
          }}
        />
        <Tab.Screen
          name="prices"
          component={prices}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <view
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="pricetags-outline" size={30} color="black" />
                </view>
              );
            },
          }}
        />
        <Tab.Screen
          name="settings"
          component={settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <view
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="settings" size={30} color="black" />
                </view>
              );
            },
          }}
        />
        <Tab.Screen
          name="transactions"
          component={transaccions}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <view
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons name="transfer" size={30} color="black" />
                </view>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
