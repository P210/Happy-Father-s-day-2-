import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';





export default class HomeScreen extends Component {

 

  render() {
    return (
      <View>
      <Image
      style = {styles.imageIcon}
       source={require('../Photo/Photo fathers day.PNG')}  
              /> 

              <Text>Dad, For all those times I left it unsaid. Thank you 
              Thanks for being there for me, for showing me the way, for being patient with me even 
              when I made it difficult for you, for believing in me and encouraging me to dream, and being such 
              an inspiring presence in my life!</Text>
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Screen1')}>
              <Text>Thanks WhiteHatJr</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Screen2')}>
              <Text>Best Dad</Text>
            </TouchableOpacity>

         <Image
      style = {styles.imageIcon2020}
       source={require('../Photo/bestDadintheword.png')}  
              /> 
        
              

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  
  imageIcon: {
    width: 200,
    height: 200,
    marginLeft: 60,
  },
  imageIcon2020: {
    width: 200,
    height: 200,
    
  } 
});

  
