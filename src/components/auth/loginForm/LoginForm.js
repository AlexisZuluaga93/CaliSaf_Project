import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Input,Icon,Button} from "react-native-elements"
import { styles } from './LoginForm.styles'
import {useField, useFormik } from 'formik'
import {initialValues,validationSchema} from './LoginForm.data'
import {auth,screen} from '../../../utils'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigation} from '@react-navigation/native'
import Toast from 'react-native-toast-message'

export  function LoginForm() {
  const [showHidenPassword, setShowHidenPassword]= useState(false)
  const onShowPassword = ()=>{
    setShowHidenPassword(prevState =>!prevState)
  }

  const navigation= useNavigation()
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit: async(formValue)=>{
      try{
          await signInWithEmailAndPassword(auth,formValue.email,formValue.password)
          navigation.navigate(screen.account.account)
        }
      catch(error){
        Toast.show({
          type:"error",
          position:"button",
          text1:"Usuario o contraseña incorrecto"
        })
      }
    },
    
       
  })

  return (
    <View style={styles.content}>
      <Input
        containerStyle={styles.input}
        placeholder='Correo Electronico'
        rightIcon={
            <Icon
                type='material-community'
                name='email'
                iconStyle={styles.icon}
            />}
        onChangeText={text => formik.setFieldValue("email",text)}
        errorMessage={formik.errors.email}
      />

      <Input
        containerStyle={styles.input}
        placeholder='Contraseña'
        secureTextEntry={showHidenPassword ? false:true}
        rightIcon={
            <Icon
                type='material-community'
                name={showHidenPassword ? 'eye-off-outline':'eye-outline'}
                iconStyle={styles.icon}
                onPress={onShowPassword}
            />}
        onChangeText={text => formik.setFieldValue("password",text)}
        errorMessage={formik.errors.password}
      />
      
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyles}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />

    </View>
  )
}