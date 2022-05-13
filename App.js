import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './src/screens/GameScreen';
import Colors from './src/utils/colors';
import GameOverScreen from './src/screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameRounds, setGameRounds] = useState(0);

  const [isFontLoaded] = useFonts({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = (newGameOver) => {
    setIsGameOver(newGameOver);
  };

  const resetGameHandler = () => {
    setUserNumber(null);
    setIsGameOver(false);
    setGameRounds(0);
  };

  let screen;

  if (!isGameOver) {
    screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
  }

  if (userNumber)
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        setGameRounds={setGameRounds}
        roundNumber={gameRounds}
      />
    );
  if (isGameOver)
    screen = (
      <GameOverScreen
        pickedNumber={userNumber}
        resetGameHandler={resetGameHandler}
        gameRounds={gameRounds}
      />
    );

  if (!isFontLoaded) return <AppLoading />;

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
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
