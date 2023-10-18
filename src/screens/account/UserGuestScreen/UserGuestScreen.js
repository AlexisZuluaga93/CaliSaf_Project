import { View, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {Text,Button,Image}from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import {styles} from './UserGuestScreen.styles'
import {screen} from '../../../utils'
export function UserGuestScreen() {
  const navigation=useNavigation();
  const goToLogin = ()=>{
    navigation.navigate(screen.account.login)
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/form.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar Perfil</Text>
      <View style={styles.viewDescription}>
      <Text style={styles.description}>Cada día, tu comunidad enfrenta desafíos y peligros que solo pueden 
        ser abordados si todos nos unimos. Con nuestra aplicación, puedes convertirte 
        en un agente de cambio activo y contribuir a la seguridad y el bienestar de Cali.
      </Text>
      </View>
      
      <Button 
        title="Ver Perfil"
         onPress={goToLogin} 
         buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  )
}