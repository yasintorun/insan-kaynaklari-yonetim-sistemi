class Helper {

    //Bu method girilen tarih ile günümüz arasındaki farkı buluyor.
    static DateAgo(date) {
        return Math.floor((Date.now()- date.getTime() )/(1000 * 3600 * 24));
    }
    
    static OnlyYearAndMonth(date) {
        let dateValues = date.split('-')
        return (dateValues[0] + "-"+ dateValues[1])
    }
}

export default Helper;