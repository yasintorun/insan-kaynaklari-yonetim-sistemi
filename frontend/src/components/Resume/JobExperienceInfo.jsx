import React from 'react'
import MessageBox from '../MessageBox'
export default function JobExperienceInfo() {
    return (
        <div>
            <MessageBox >
                    <div>İş deneyimleri</div>
                    <div className="d-flex ">
                    <div className="w-25 d-block">
                            <img src="https://aday-asset.mncdn.com/img/firma-logosuz.png" alt="pp" className="rounded w-100 img-fluid img-thumbnail" />
                            <p className="mt-2 text-center">9 Ay</p>
                        </div>
                        <div className="w-100 ms-4">
                            <div className="d-flex justify-content-between w-75">
                                <div>
                                    <div className="message-item m-0">
                                        <p className="text-muted secondary-text">Pozisyon</p>
                                        <p className="primary-text">Bilgisayar Mühendisi</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Firma adı</p>
                                        <p className="primary-text">Aselsan</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Şehir</p>
                                        <p className="primary-text">Ankara</p>
                                    </div>
                                    
                                </div>
                                <div>
                                <div className="message-item m-0">
                                        <p className="text-muted secondary-text">Çalışma şekli</p>
                                        <p className="primary-text">Tam zamanlı</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Başlangıç tarihi</p>
                                        <p className="primary-text">04/2020</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Bitiş tarihi</p>
                                        <p className="primary-text">01/2021</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </MessageBox>
        </div>
    )
}
