import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (goalText) => {
    setEnteredGoal(goalText);
  }

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(() => [...courseGoals, { key: Math.random().toString(), value: enteredGoal }]);
    //setEnteredGoal('');
  }

  return (
    <View style={styles.mainView}>

      <View style={styles.addView}>
        <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title='ADD' type='solid' onPress={addGoalHandler} />
      </View>

      <FlatList data={courseGoals} renderItem={itemData =>
        <View style={styles.listItem} >
          <Text >{itemData.item.value}</Text>
        </View>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    paddingVertical: '10%',
    paddingHorizontal: '5%'
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },

  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});
