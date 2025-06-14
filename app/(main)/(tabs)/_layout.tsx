import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";


const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} />,
          tabBarLabel: ({ focused }) => <Text style={{}}>Home</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
            tabBarLabel: ({ focused }) => <Text style={{}}>Account</Text>,
          tabBarIcon: () => <AntDesign name="user" size={24} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
