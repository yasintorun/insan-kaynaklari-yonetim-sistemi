import axios from "axios"


export default class MailService {

    sendRegisterMail(userVal) {
        return axios.post("http://localhost:8080/api/mail/sendRegisterMail", userVal)
    }
}
