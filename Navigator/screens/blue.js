import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// define the page's view
const BluePage = ({ navigation }) => {
  return (
    <View style={styles.outerContainer}>
      <Image
        source={require('../assets/blue.jpg')}
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>Blue</Text>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>You are currently on Blue</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('RedPage')}>
          <Text style={styles.buttonText1}>Go to Red Page</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('GreenPage')}>
          <Text style={styles.buttonText2}>Go to Green Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff'
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: '100vh',
    width: '100%',   
  },
  txtContainer: {
    marginVertical: 50,
    width: '100%',
    alignItems: 'center',
  },
  txt: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 10
  },  
  btnContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button1: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderColor: '#ff3600',
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText1: {
    color: '#ff3600',
    fontSize: 16,
  },
  button2: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderColor: '#22ae00',
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText2: {
    color: '#22ae00',
    fontSize: 16,
  },
});

// export the page
export default BluePage;