import { toast } from "react-toastify";

class Helper {

    //Bu method girilen tarih ile günümüz arasındaki farkı buluyor.
    static DateAgo(date) {
        return Math.floor((Date.now()- date.getTime() )/(1000 * 3600 * 24));
    }
    
    //dd-mm-yyyy formatını mm-yyyy formatına çeviriyor.
    static OnlyYearAndMonth(date) {
        let dateValues = date.split('-')
        return (dateValues[0] + "-"+ dateValues[1])
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

}

export default Helper;