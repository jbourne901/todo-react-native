import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

import Todo from "../todo";


const App = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const addToDo = () => {
    if(input) {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  const tds: JSX.Element[] = [];
  for(let i=0; i<todos.length; i++) {
    const t = todos[i];
    tds.push(<Todo key={i} title={t} />)
  }

  return (
    <>
      <SafeAreaView>
         <View>
           <Text>Todo app</Text>           
         </View>
         <ScrollView style={appStyles.scrollView}>
          {tds}
         </ScrollView>         
         <TextInput  
          style={appStyles.todoInput}
          value={input}
          onChangeText = {(text) => setInput(text)}
         />
        <Button 
          title="Add todo" 
          onPress={() => addToDo()}
        />
      </SafeAreaView>
      <StatusBar/>
    </>
  );
};

const appStyles = StyleSheet.create({   
  todoInput: {
    height: 40,
    margin: 20,
    borderColor: "red",
    borderWidth: 1
  },
  scrollView: {
    height: "70%"
  }
})

export default App;
