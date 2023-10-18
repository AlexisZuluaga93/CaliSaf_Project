import * as Yup from 'yup'

export function initialValues(){
    return{
        email:"",
        password:"",
        repeatPassword:""
    }
}

export function validationSchema(){
    return Yup.object({
        email:Yup.string()
        .email("El email no es correacto")
        .required("El email es obligatorio"),
        password:Yup.string("Contrase")
        .required("La contraseña es obligatoria"),
        repeatPassword:Yup.string()
        .required("")
        .oneOf([Yup.ref("password")],"Las contraseñas tienen que ser iguales")

    })
}