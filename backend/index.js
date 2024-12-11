const express = require('express')
const app = express()
app.use(express.json())
const nodemailer = require('nodemailer')
require('dotenv').config();


const cors = require('cors')
const { Contact } = require('./models/contact')

app.use(cors())
require('./mongoose')

// app.listen(1000, () => {
//     console.log('Server started on 1000')
// })

app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, I am Deepa')
})


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: 'deepa.worksol@gmail.com',
        // pass: 'qvze ajia fpmq hzya'
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

app.post('/api/contact', async (req, res) => {
    console.log(req.body)
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
        return res.status(400).json({ error: 'Name, email, mobile, and message are required' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, mobile, message });
    newContact.save()
        .then(() => {
            // Send email to user
            const userMailOptions = {
                from: 'deepa.worksol@gmail.com',
                to: email,
                subject: 'Thank you for contacting me',
                text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon\n\nMessage: ${message}\n\nBest regards,\nDeepa Sharma`
            };

            transporter.sendMail(userMailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('User email sent: ' + info.response);
            });

            // Send email to yourself
            const adminMailOptions = {
                from: email,
                to: 'deepa.worksol@gmail.com', // Replace with your email
                to: process.env.EMAIL_USER,
                subject: 'My Portfolio',
                text: `New message from ${name} (${email}, ${mobile}):\n\n${message}`
            };

            transporter.sendMail(adminMailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Admin email sent: ' + info.response);
            });

            res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
        })
        .catch(err => res.status(500).json({ success: false, error: 'Error saving contact form' }));
})