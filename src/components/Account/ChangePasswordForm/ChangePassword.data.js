import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("La contraseña es obligatoria"),
    newPassword: Yup.string().required("La nueva contraseña es obligatoria"),
    confirmNewPassword: Yup.string()
      .required("Es necesario confirmar la contraseña")
      .oneOf([Yup.ref("newPassword")], "Las contraseñas deben coincidir"),
  });
}
