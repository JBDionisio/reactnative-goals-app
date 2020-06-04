import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [dayGoals, setDayGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setDayGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setDayGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={dayGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            value={itemData.item.value} 
          />
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
