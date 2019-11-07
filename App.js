import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderImage from './logo_image.js';
import Button from 'react-native-button';
//import { Button } from 'react-bootstrap';
//import Button from 'react-button'

import { Image } from 'react-native';

export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container} >
          <HeaderImage style = {styles.logoContainer} ></HeaderImage>
            <Text style = {styles.textContainer}>Identifera skadedjur med bild</Text>
            <Text style = {styles.textContainer}>Ta en skarp och ljus bild</Text>


            <Image source = {require('./src/images/mainPicture.jpg')} style = {{ width: 150, height: 220 }}/>
            <Button style = {styles.buttonContainer}>
               SCANNA SKADEDJUR
            </Button>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
   textContainer: {
      fontSize: 10

   },
   buttonContainer: {
         fontSize: 8,
         color: 'white',
         backgroundColor: 'orange'
   },
   logoContainer: {
       width: 100,
       height: 30
    }
});


