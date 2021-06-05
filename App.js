import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput,ScrollView } from "react-native";

export default function App() {
  const [enetredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enetredGoal]);
    setEnteredGoal("");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enetredGoal}
        />
        <Button title="ADDD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal)=><View  key={goal} style={styles.items}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 6,
  },
  items:{
    padding:10,
    marginVertical:10,
    borderColor: "black",
    backgroundColor:"#ccc",
    borderWidth:1
  }
});
