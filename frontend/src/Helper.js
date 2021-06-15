class Helper {

    //Bu method girilen tarih ile günümüz arasındaki farkı buluyor.
    static DateAgo(date) {
        return Math.floor((Date.now()- date.getTime() )/(1000 * 3600 * 24));
    }
}

export default Helper;