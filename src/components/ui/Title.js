import { Text, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const Title = ({ children, customStyle }) => {
  return <Text style={[styles.title, customStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

export default Title;
