import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IProps {
  title: string;
}

const Todo = (props: IProps) => {
  return (
    <View>
      <Text style={todoStyles.titleText}>
        {props.title}
      </Text>
    </View>
  );
};

const todoStyles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  
})

export default Todo;
