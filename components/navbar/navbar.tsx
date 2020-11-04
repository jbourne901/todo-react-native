import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface INavbarProps {
  title: string;
};

const Navbar = (props: INavbarProps) => {
  return (
    <View style={navBarStyle.container}>
        <Text style={navBarStyle.text}>{props.title}</Text>
    </View>
  );
}

const navBarStyle = StyleSheet.create({
  container: {    
    height: 70,
    backgroundColor: "#3949ab",
    alignItems: "center",
    justifyContent: "center"
  },  
  text: {
    color: "white",
    fontSize: 20
  }
});

export {Navbar};
