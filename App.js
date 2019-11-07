import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import HeaderImage from './logo_image.js';
import Button from 'react-native-button';
//import { Button } from 'react-bootstrap';
//import Button from 'react-button'

import { Image } from 'react-native';

export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container} >
            <HeaderImage style = {styles.logoContainer,'\n'} ></HeaderImage>
            <View style={ styles.hrLine}/>
            <Text style = {styles.textContainer}>Identifera skadedjur med bild</Text>
            <Text style = {styles.textContainer}> Ta en skarp och ljus bild</Text>
            <Image source = {require('./src/images/mainPicture.jpg')} style = {{ width: 150, height: 220, marginTop: 5 }}/>
            <Button style = {styles.buttonContainer}>
               SCANNA SKADEDJUR
            </Button>
         </View>
      );
   }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 20
   },
   textContainer: {
      fontSize: 10,
      marginTop: 10

   },
   buttonContainer: {
         fontSize: 8,
         color: '#fff',
         backgroundColor: 'rgba(239,121,38,1)',
         marginTop: 5
         /*borderWidth: 3,
         borderColor: '#fff'*/
   },
   logoContainer: {
       width: 100,
       height: 30,
       marginTop: 10
    },
    hrLine: {
         backgroundColor: 'rgba(239,121,38,1)', /*'#ff6600'*/
          height: 6,
          width: 165,
          marginTop: 10
    }
});


