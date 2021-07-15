import Swal from "sweetalert2";

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


    /*
    Sweat alert kullanılarak oluşturulmuştur.
    Bu modal projedeki herhangi bir öğeyi silerken kullanılıyor.
    Bu modal sayesinde direkt silmek yerine kullanıcıya silmek isteyip istemediğini soruyor.
    header: Öğe ismi, text: modal bilgi kısmı, callBack: serviceteki .delete kısmı.
        ÖRNEK KULLANIM:
        Helper.DeleteModalBox("İş ilanı", "İş ilanını silersen tekrar geri getiremezsin!", jobAdvertService.delete(id));
    */
    static async DeleteModalBox(header, text, callBack) {
        return  Swal.fire({
            title: header + ' silmek istediğinden emin misin?',
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Evet, Sil!',
            cancelButtonText: 'Vazgeç'
        }).then((result) => {
            if (result.isConfirmed) {
                callBack().then(result => {
                    Swal.fire(
                        'Silindi!',
                        result?.data?.message,
                        'success'
                    )
                })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'İptal Edildi',
                    header+' silinmedi',
                    'error'
                )
            }
        })
    }


}

export default Helper;