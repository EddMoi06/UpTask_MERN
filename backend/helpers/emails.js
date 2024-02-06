import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    const {email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "de25ca4205af2b",
          pass: "a66111c1e687bc"
        }
      });

    const info = await transport.sendMail({
        from: '"UpTask - Administrador" <cuenta@uptask.com>',
        to: email,
        subject: "UpTask Comprueba tu Cuenta", 
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola ${nombre}, </p>
        
        <p>Tu cuenta ya esta casi lista, solo debes confirmarla en el siguiente enlace: 
        
        <a href="http://localhost:5173/confirmar/${token}">Comprobar Cuenta</a></p>

        <p> Si no creaste esta cuenta, puedes ignorar este mensaje.</p>
        `
    })
}

export const emailCambioPassword = async (datos) => {
  const {email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "de25ca4205af2b",
        pass: "a66111c1e687bc"
      }
    });

  const info = await transport.sendMail({
      from: '"UpTask - Administrador" <cuenta@uptask.com>',
      to: email,
      subject: "UpTask Actualiza tu Contraseña", 
      text: "Actualiza tu Contraseña en UpTask",
      html: `<p>Hola ${nombre}, </p>
      
      <p>Actualiza tu contraseña presionando en el siguiente enlace: 
      
      <a href="http://localhost:5173/olvide-password/${token}">Cambiar Contraseña</a></p>

      <p> Si no solicitaste esto, puedes ignorar este mensaje.</p>
      `
  })
}

