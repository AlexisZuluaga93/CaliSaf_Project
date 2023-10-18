import { View, } from 'react-native'
import React, {useState} from 'react'
import {Input,Icon,Button,Text} from 'react-native-elements'
import {styles} from './RegisterForm.styles'
import {useField, useFormik } from 'formik'
import {initialValues,validationSchema} from './RegisterForm.data'
import {auth,screen} from '../../../utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigation} from '@react-navigation/native'
import Toast from 'react-native-toast-message'

export  function RegisterForm() {
  const [showPassword, setShowPasword]= useState(false)
  const navigation= useNavigation()
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit: async(formValue)=>{
      try{
          await createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
          navigation.navigate(screen.account.account)
        }

      catch(error){
        Toast.show({
          type:"error",
          position:"button",
          text1:"error al registrarse intente mas tarde"
        })
      }
      console.log("Formulario Enviado")
      console.log(formValue);
    },
    
       
  })

  const showHidenRepeatPassword = ()=>{

  }
  const showHidenPassword =()=>{
      setShowPasword(prevState => !prevState)
  }

  return (
    <View style= {styles.content}>
      <Input
        placeholder='Correo Electronico'
        containerStyle ={styles.input}
        rightIcon=
            {<Icon 
                type='material-community'
                name='email' 
                iconStyle={styles.icon}/>}
        onChangeText={text => formik.setFieldValue("email",text)}
        errorMessage={formik.errors.email}
      />

      <Input
        placeholder='Contraseña'
        containerStyle ={styles.input}
        secureTextEntry={showPassword? false :true}
        rightIcon=
            {<Icon 
                type='material-community'
                name={showPassword? 'eye-off-outline':'eye-outline'}
                iconStyle={styles.icon}
                onPress={showHidenPassword} 
             />
              
              }
                   
        onChangeText={text => formik.setFieldValue("password",text)}
        errorMessage={formik.errors.password}
      />

     <Input
        placeholder='Confirmar Contraseña'
        containerStyle ={styles.input}
        secureTextEntry={showPassword? false :true}
        rightIcon=
            {<Icon 
                type='material-community'
                name={showPassword? 'eye-off-outline':'eye-outline'}
                iconStyle={styles.icon}
                onPress={showHidenPassword}
             />}
                
        onChangeText={text => formik.setFieldValue("repeatPassword",text)}
        errorMessage={formik.errors.repeatPassword}
      />

      <Button 
        title="Registrarse"
        containerStyle={styles.btnStyle}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}