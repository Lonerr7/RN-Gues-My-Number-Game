import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 22,
  },
});

export default InstructionText;