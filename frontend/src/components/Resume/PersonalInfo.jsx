import React from 'react'
import MessageBox from '../MessageBox'
export default function PersonalInfo() {
    return (
        <div>
            <MessageBox>
                    <div>Kişisel Bilgiler</div>
                    <div className="d-flex ">
                        <div className="w-25 d-block">
                            <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
                        </div>
                        <div className="w-100 ms-4">
                            <h2>Yasin Torun</h2>
                            <div className="d-flex justify-content-between w-75">
                                <div>
                                    <div className="message-item m-0">
                                        <p className="text-muted secondary-text">E-posta Adresi</p>
                                        <p className="primary-text">yasintorun4680@gmail.com</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Telefon</p>
                                        <p className="primary-text">90 (546) 227 09 78</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Ev adresi</p>
                                        <p className="primary-text">Düziçi / Osmaniye</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="message-item m-0">
                                        <p className="text-muted secondary-text">Doğum tarihi</p>
                                        <p className="primary-text">21/07/1998</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Cinsiyet</p>
                                        <p className="primary-text">Erkek</p>
                                    </div>
                                    <div className="message-item">
                                        <p className="text-muted secondary-text">Uyruk</p>
                                        <p className="primary-text">Türkiye Cumhuriyeti</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </MessageBox>
        </div>
    )
}
