import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {styles} from './RegisterScreen.styles'
import {Image} from 'react-native-elements'
import {RegisterForm} from '../../../components/auth'

export  function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/logo2.png")}
        style={styles.image}
      />

      <View style={styles.content}>
          <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>

    
  )
}