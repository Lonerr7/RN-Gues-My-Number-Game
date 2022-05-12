import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './src/screens/GameScreen';
import Colors from './src/utils/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require(`./src/assets/images/background.png`)}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber ? (
            <GameScreen userNumber={userNumber} />
          ) : (
            <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
