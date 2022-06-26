
import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }



  // PASSANDO UMA FUNCAO PARA A FUNCAO DE USESTATE PARA PEGAR A LISTA ATUAL DE GOALS (USANDO O SPREAD OPERATOR) E ATUALIZAR ELA
  function addGoalHandler(enteredGoalText) {
    for (let index = 0; index < 40; index++) {      
      setCourseGoals(
        (currentCourseGoals) => [
          ...currentCourseGoals,
          { text: enteredGoalText, key: Math.random().toString() }
        ]);
      
    }
    endAddGoalHandler();
    Keyboard.dismiss();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
    <StatusBar style='inverted' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 5,
  },


});
