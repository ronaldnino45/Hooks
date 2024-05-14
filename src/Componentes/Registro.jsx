import { useForm } from "react-hook-form"


function Registro() {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();

  const password = watch("password")


  return (
    <>

      <form onSubmit={handleSubmit((data) => console.log(data))}>


        <label htmlFor="nombre"> Nombres </label>
        <input type="text"
          {...register('nombre', {
            required: {
              value: true,
              message: "Se requiere un nombre"
            },
            minLength: {
              value: 6,
              message: "El nombre debe terner minimo 6 caracteres"
            },
            maxLength: {
              value: 12,
              message: "El nombre debe terner maximo 12 caracteres"
            },



          })} />

        {errors.nombre && (<span className="text-danger">{errors.nombre.message}</span>)}


        <br />

        <label > Correo </label>
        <input  {...register('correo', {
          required: {
            value: true,
            message: "Se requiere un correo valido"
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: " El correo no tiene formato valido"
          },
        })} />
        {errors.correo && (<span className="text-danger">{errors.correo.message}</span>)}

        <br />

        <label > Password </label>
        <input  {...register('password', {
          required: {
            value: true,
            message: " la contraseña es requerida"
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            message: " la contraseña no tiene formato valido"
          },
        })} />
        {errors.password && (<span className="text-danger">{errors.password.message}</span>)}

        <br />
        <label > Confirmar Password </label>
        <input  {...register('confirmarpassword', {
            required: {
                value: true,
                message:  'La contraseña es Requerida'
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                validate: value => value === password,
                message: "Las contraseñas no coinciden"
            },

        })} />

              {errors.confirmarpassword && (<span className="text-danger">{errors.confirmarpassword.message}</span>)}


        <br />

        <label htmlFor="fechadenacimiento"> Fechas de nacimiento </label>
        <input type="date"
          {...register('fechadenacimiento', {
            required: {
              value: true,
              message: "El campo es requerido"
            },
          })} />

        {errors.fechadenacimiento && (<span className="text-danger">{errors.fechadenacimiento.message}</span>)}

        <br />
        <button
          className="btn btn-primary"
          type="submit">Registrarse</button>
      </form>

    </>

  )
}

export default Registro