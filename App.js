import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container3}></View>

      <TouchableOpacity 
        style={styles.boutonV}
        onPress={() => Alert.alert('Félicitations')}
      >
        <Text>succès3</Text>
      </TouchableOpacity>

      <View style={styles.container3}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }




  ,  boutonV: {
    flex: 3,
    backgroundColor: '#0f0',
    Color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50 ,
    borderWidth: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },

  container3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
