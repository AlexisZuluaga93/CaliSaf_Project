import * as Yup from "yup";

export function initialValues() {
  return {
    typeRep: "",
    address: "",
    description: "",
    location: null,
    images: [],
  };
}

export function validationSchema() {
  return Yup.object({
    typeRep: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    location: Yup.object().required("La ubicacion es requerida"),
    images: Yup.array().max(10),
  });
}
