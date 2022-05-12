import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../utils/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setentEredNumber] = useState('');

  const numberInputHandler = (e) => {
    setentEredNumber(e.target.value);
  };

  const resetInputHandler = () => {
    setentEredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = +enteredNumber;

    if (
      isNaN(chosenNumber) ||
      chosenNumber > 99 ||
      chosenNumber < 0 ||
      !enteredNumber
    ) {
      Alert.alert(
        'Invalid number',
        'The number must be from 0 to 99. Also input field is not allowed!',
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }]
      );
      return;
    }

    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title customStyle={styles.title}>Guess My Number</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChange={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  title: {
    maxWidth: '65%',
    marginHorizontal: 'auto',
  },
  
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
