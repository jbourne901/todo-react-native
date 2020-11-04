import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import {Navbar} from "../navbar";
import { AddTodo } from '../add-todo';
import {ITodo, testTodos, createTodo} from "../../types/todo";
import {Todo} from "../todo";

const Main = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect( () => {
    setTodos(testTodos);
  }, []);

  const handleAddTodo = (title: string) => {
    const newTodo = createTodo(title);
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (todo: ITodo) => {

    const newTodos = [];
    for(let t of todos) {
      if(t.id!==todo.id) {
        newTodos.push(t);
      }
    }
    setTodos(newTodos);
  };
 

  return (    
    <SafeAreaView style={mainStyle.container}>
        <Navbar title="Todo App6"/>
        <AddTodo onSubmit = {(t: string) => handleAddTodo(t) }/>
        <FlatList<ITodo> 
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem = {(it) => (
            <Todo 
              todo={it.item} 
              onRemove = {() => removeTodo(it.item)}
            />
          )}
        />
    </SafeAreaView>
  );
}

const mainStyle = StyleSheet.create({
  container: {
  },  
  list: {
    paddingHorizontal: 20,
  }
});

export {Main};
