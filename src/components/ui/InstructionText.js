import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const InstructionText = ({ children, customStyle }) => {
  return <Text style={[styles.instructionText, customStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 22,
  },
});

export default InstructionText;
