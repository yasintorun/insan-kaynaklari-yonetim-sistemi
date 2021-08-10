import { toast } from "react-toastify";

class Helper {

    //Bu method girilen tarih ile günümüz arasındaki farkı buluyor.
    static DateAgo(date) {
        return Math.floor((Date.now()- date.getTime() )/(1000 * 3600 * 24));
    }
    
    //dd-mm-yyyy formatını mm-yyyy formatına çeviriyor.
    static OnlyYearAndMonth(date) {
        const d =  new Date(date)
        if(Helper.isValidDate(d)) {
            const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"]
            let dateValues = date.split('-')
            return (months[parseInt(dateValues[1])] + " " + dateValues[0])
        }
        return undefined
    }

    static getMonthAndYear(date) {
        const d = new Date(date)
        if(Helper.isValidDate(d)) {
            let dateValues = date.split('-')
            return dateValues[0] + '-' + dateValues[1]
        }
        return undefined
    }

    

    static ToastInfo(isSuccess, msg) {
        if(isSuccess) {
            toast.success(msg)
        } else {
            toast.error(msg)
        }
    }


    static LoadState() {
        const state = localStorage.getItem("state")
        return JSON.parse(state)
    }

    static SaveState(state) {
        localStorage.setItem("state", JSON.stringify(state))
    }

    static deleteState() {
        localStorage.removeItem("state")
    }

    static async setMyCallBack(mainFunc) {
        await mainFunc()
    }

    static isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }
    
}

export default Helper;