import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , Image} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Award  extends React.Component {
  render(){
    return( 

       
        <View>
           

        <Text
          style={styles.buttonText}>
      Best Dad in the world ! Award goes to you 
        </Text>
         <Image
      style = {styles.imageIcon}
       source={require('../Photo/best dad 1.PNG')}   
              /> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  buttonText: {
    fontSize: 20,
  },
  imageIcon: {
    width:100,
    height: 300,
    marginLeft: 100,
  }

});