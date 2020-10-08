const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   service:'gmail',
   auth: {
      user: 'komp.service.tula@gmail.com',
      pass: 'hg94Me$89w'
   }
})

module.exports.sender =  async function _sendEmail(comment){
   transporter.sendMail({
      from: 'Server Komp <server-request>',
      to: 'tom901@rambler.ru',
      subject: 'Подтверждение коментария',
      text: `Кто написал: ${comment.name} \nДата: ${new Date(comment.date)} \nТелефон: ${comment.phone} \nТекст комментария: ${comment.text}`,
      html: `<!DOCTYPE HTML PUBLIC «-//W3C//DTD HTML 4.0 Transitional//EN»>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <script src="training.js" type="text/javascript"></script>
          <script type="text/javascript">
             
             allowed(){
                
             }
          </script>
      </head>
      <body>
          <button style="
            height: 30px;
            background-color: #7dc9c7;
            border: none;
            border-radius: 10px;
            font-family: cursive;
            font-size: 13px;
          " onclick="allowed()">Подтвердить комментарий</button>
      </body>
      </html>`
   })
}