const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   service:'gmail',
   auth: {
      user: 'komp.service.tula@gmail.com',
      pass: 'ohrttuekbokbylme'
   }
})
const link = 'https://www.youtube.com/'

module.exports.sender = async function _sendEmail(comment){
   await transporter.sendMail({
      from: 'komp.service.tula@gmail.com',
      to: 'tom901@rambler.ru',
      subject: 'Подтверждение отзыва <Server-request>',
      text: ``,
      html: `<!DOCTYPE HTML PUBLIC «-//W3C//DTD HTML 4.0 Transitional//EN»>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <script src="training.js" type="text/javascript"></script>
      </head>
      <body>
         <div>
            <p>Кто написал: ${comment.name}</p>
            <p>Дата: ${new Date(comment.date)}</p>
            <p>Телефон: ${comment.phone}</p>
            <p>Текст комментария: ${comment.text}</p>
         </div>
         <a style="
            display: block;
            text-decoration: none;
            width: 210px;
            height: 22px;
            background-color: #7dc9c7;
            color: black;
            border: none;
            border-radius: 8px;
            font-family: cursive;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
         " href="${link}" target="_blank">Подтвердить комментарий</a>
      </body>
      </html>`
   }, ((err, info) => {
      if (err) {
         console.log('[ERROR with dispatching an email]: ', err)
         return
      }else{
         console.log('[Dispacth is successful]: ', info)
      }
   }))
}