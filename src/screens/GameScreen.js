import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
  return <View style={styles.screen}>
    <Title>Opponent's guess</Title>
    {/* GUESS */}
    <View>
      <Text>Higher or lower?</Text>
      {/* + - */}
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  </View>
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,

  }
});

export default GameScreen;
