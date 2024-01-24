// Importe a biblioteca nodemailer
const nodemailer = require('nodemailer');

// Função para enviar o formulário
function submitForm() {
  // Obtenha os valores dos campos do formulário
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;

  // Configuração do transporte do nodemailer (substitua com suas configurações de e-mail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'envio.de.formulario2024@gmail.com',
      pass: 'formulario123'
    }
  });

  // Defina o conteúdo do e-mail
  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'caio.dev.system@gmail.com', // Substitua pelo seu endereço de e-mail
    subject: `Novo Formulário de Contato de ${name}`,
    text: `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nAssunto: ${subject}`
  };

  // Envie o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('E-mail enviado: ' + info.response);
    }
  });
}
