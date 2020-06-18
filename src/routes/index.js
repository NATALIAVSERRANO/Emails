const { Router } = require ('express');
const nodemailer = require ('nodemailer');
const router = Router();


router.post('/send-email', async (req,res) => {
   const { name,email,phone,message } = req.body; 

   contentHTML = `
   <h1>User Information</h1>
   <ul>
        <li>Username:${name}</li>
        <li>User Email:${email}</li>
        <li>Phone:${phone}</li>
   </ul>
   <p>${message}</p>
   `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nathvs250@gmail.com',
            pass: 'octubre00',
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: 'nathvs250@gmail.com',
        to: ` ${email}`,
        subject: `Formulario` ,
        html: contentHTML
    }

    transporter.sendMail(mailOptions, function(err,data) {
        if(err) {
            console.log('ERROR', err);
        } else {
            console.log('Email SENT');
        }
    });
        
    
    
    console.log('message sent');

    res.send('recibido');
});


module.exports = router;


