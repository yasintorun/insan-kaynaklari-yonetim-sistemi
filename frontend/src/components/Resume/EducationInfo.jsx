import React from 'react'
import MessageBox from '../MessageBox'
export default function EducationInfo() {
    return (
        <div>
            <MessageBox >
                <div>Eğitim bilgileri</div>
                <div className="d-flex ">
                    <div className="w-25 d-block">
                        <img src="https://img-kariyer.mncdn.com/UniversiteLogolar/ankara-universitesi.png" alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
                        <p className="text-center h6 mt-2">Lisans</p>
                    </div>
                    <div className="w-100 ms-4 mt-4">
                        <div className="d-flex justify-content-between w-75">
                            <div>
                                <div className="message-item m-0">
                                    <p className="text-muted secondary-text">Üniversite</p>
                                    <p className="primary-text">Ankara Üniversitesi</p>
                                </div>
                                <div className="message-item">
                                    <p className="text-muted secondary-text">Fakülte</p>
                                    <p className="primary-text">Mühendislik fakültesi</p>
                                </div>
                                <div className="message-item">
                                    <p className="text-muted secondary-text">Bölüm</p>
                                    <p className="primary-text">Bilgisayar Mühendisliği</p>
                                </div>

                            </div>
                            <div>
                                <div className="message-item m-0">
                                    <p className="text-muted secondary-text">Öğretim tiği</p>
                                    <p className="primary-text">Örgün öğretim</p>
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
