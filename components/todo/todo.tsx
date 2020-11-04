import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ITodo} from "../../types/todo";

interface ITodoProps {
  todo: ITodo;
  onRemove: () => void;
}

const Todo = (props: ITodoProps) => {

  const handlePress = () => {    
    props.onRemove();
  }

  return (    
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => handlePress()}
    >
      <View style={todoStyle.container}>
        <Text style={todoStyle.text}>{props.todo.title}</Text>
      </View>
    </TouchableOpacity>    
  );
}

const todoStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5
  },  
  text: {
    color: "red",
  }
});

export {Todo};
