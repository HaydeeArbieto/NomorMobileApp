import React, { Component } from 'react';
import { View, Image } from 'react-native';


const HeaderImage = () => (
    <Image source = {require('./src/images/logo_nomor.png')} style = {{ width: 100, height: 30 }}/>

)

/*const firstImage = () => (
   <Image source = {require('./picture1.png')} style = {{ width: 100, height: 30 }}
   style = {{ width: 200, height: 200 }}
   />
)*/

export default HeaderImage;