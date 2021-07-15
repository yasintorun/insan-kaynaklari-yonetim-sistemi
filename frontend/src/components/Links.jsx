export default class Links {
    static HOST = "https://ikariyernet.herokuapp.com/"
    static API = "api"
    static ROOT = this.HOST + this.API
    /*Kullanıcı giriş, kayıt ol gibi linklerin yer aldıgı kısım*/
    static USERS = "/users"
    static JobSeekerRegister = this.USERS + "/jobseekerregister"
    static EmployerRegister = this.USERS + "/employerregister"
    static Login = this.USERS + "/login"
}