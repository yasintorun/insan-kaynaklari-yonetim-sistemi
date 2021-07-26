import Swal from "sweetalert2"


class YTAlerts {

    /*
    Sweat alert kullanılarak oluşturulmuştur.
    Bu modal projedeki herhangi bir öğeyi silerken kullanılıyor.
    Bu modal sayesinde direkt silmek yerine kullanıcıya silmek isteyip istemediğini soruyor.
    header: Öğe ismi, text: modal bilgi kısmı, callBack: serviceteki .delete kısmı.
        ÖRNEK KULLANIM:
        Helper.DeleteModalBox("İş ilanı", "İş ilanını silersen tekrar geri getiremezsin!", jobAdvertService.delete(id));
    */
    static async DeleteAlert(header, text, callBack) {
        return Swal.fire({
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
                    header + ' silinmedi',
                    'error'
                )
            }
        })
    }



    static async InfoAlert(header, text, callBack) {
        return Swal.fire(
            header,
            text,
            'success'
          )
    }

    static async WarningAlert(header, text, callBack) {
        return Swal.fire(
            header,
            text,
            'warning'
        )
    }

}

export default YTAlerts