import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

interface IAddTodoProps {
  onSubmit: (t: string) => void;
}

const AddTodo = (props: IAddTodoProps) => {
  const [input, setInput] = useState<string>("");
  const handleAddTodo = () => {
    const t = input.trim();
    if(t) {
      setInput("");
      props.onSubmit(t);
    }
  };
  
  const btnDisabled = !(input.trim().length>0);

  return (
    <View style={addTodoStyle.container}>
        <TextInput 
          value={input}
          onChangeText={(t: string) => setInput(t) }
          placeholder="Enter todo"
          style={addTodoStyle.textInput}
          autoCorrect={false}
          autoCapitalize="sentences"
          autoFocus
          autoCompleteType="off"
        />
        <Button 
          title="Add" 
          onPress = {() => handleAddTodo()}
          disabled={btnDisabled}
        />
    </View>
  );
}

const addTodoStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20
  },  
  textInput: {    
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#3949ab",
    padding: 10,
    color: "black",
  },
  button: {
    borderWidth: 1
  }
});

export {AddTodo};
