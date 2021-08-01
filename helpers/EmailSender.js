const sgMail = require('@sendgrid/mail')
const config = require("config")
const EmailTemplatesModel = require("../models/EmailTemplate")

sgMail.setApiKey(process.env.sendGridKey)


const ContactUs = async (Name, Email, Subject, Desc,PhoneNo) => {
    try {
        const Template = await EmailTemplatesModel.findOne({ Type: "ContactUs" })
        if (!Template) return {
            Error: false,
            Exception: null
        }
        const msg = {
            to: 'courier@kenancourier.com', // Change to your recipient
            from: 'courier@kenancourier.com', // Change to your verified sender
            subject: Subject,
            html: Template.EmailTemplate.replace(/\$SENDER_NAME/g, Name).replace(/\$SENDER_EMAIL/g, Email).replace(/\$DESC/g, Desc).replace(/\$PHONE_NO/g, PhoneNo),
        }

        await sgMail.send(msg)
        console.log("Email Sent")
        return {
            Error: false,
            Exception: null
        }
    } catch (error) {
        console.log("Email Error", error)
        return {
            Error: true,
            Exception: error
        }
    }
}



module.exports = {
    ContactUs,
   
}