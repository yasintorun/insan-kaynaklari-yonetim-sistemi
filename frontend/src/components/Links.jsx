export default class Links {

    static local = "http://localhost:8080/"
    static live = "https://ikariyernet.herokuapp.com/"

    static HOST = this.local
    static API = "api"
    static ROOT = this.HOST + this.API
    /*Kullanıcı giriş, kayıt ol gibi linklerin yer aldıgı kısım*/
    static USERS = "/users"
    static JobSeekerRegister = this.USERS + "/jobseekerregister"
    static EmployerRegister = this.USERS + "/employerregister"
    static Login = this.USERS + "/login"
}