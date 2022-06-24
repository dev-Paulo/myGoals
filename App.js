
import { useState } from 'react';
import {
  StyleSheet, 
  View,    
  FlatList
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { Keyboard } from 'react-native';



export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);



  // PASSANDO UMA FUNCAO PARA A FUNCAO DE USESTATE PARA PEGAR A LISTA ATUAL DE GOALS (USANDO O SPREAD OPERATOR) E ATUALIZAR ELA
  function addGoalHandler(enteredGoalText) {   
      setCourseGoals(
        (currentCourseGoals) => [
          ...currentCourseGoals,
          { text: enteredGoalText, key: Math.random().toString() }
        ]);
        Keyboard.dismiss();    
      };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.find((goal) => goal.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
     <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}/>            
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5,
  },


});
