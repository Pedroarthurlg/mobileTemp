import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "../styles/colors";
import { ChatScreen, MapScreen, PerfilScreen, SairScreen } from "../screens";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        drawerStyle: { backgroundColor: colors.secondary },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          drawerLabel: "Mapa",
          drawerIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />

      <Drawer.Screen 
          name="QrCode"
          component={QrCodeScreen}
          options = {{
            drawerLabel: "Qrcode",
            drawerIcon: () => (
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color={colors.white}
                />
            ),
          }}
      />

      <Drawer.Screen
        name="Sair"
        component={SairScreen}
        options={{
          drawerLabel: "Sair",
          drawerIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
        />
    </Drawer.Navigator>
  );
}
