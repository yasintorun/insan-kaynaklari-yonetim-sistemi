import React from 'react'
import {Icon } from 'semantic-ui-react'
import SignedOut from '../layouts/SignedOut'
export default function Home() {
    return (
        <div>
            <div className="home-showcase w-100">
                <div className="home-showcase-header p-4 w-50">
                    <div className="p-5 mt-5">
                        <h1 className="display-3 bold-header">İş arayanların ve iş verenlerin buluşma noktası</h1>
                        <div className="mt-8">
                            <SignedOut />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" home-about bg-light">
                <div className="container-large text-center mt-8">
                    <div className="">
                        <h1 className="bold-header">Neler Yapabilirsin</h1>
                    </div>
                    <div className="row font-large mt-5">
                        <div className="col-md-5 bordered shadow bg-white mt-4">
                            <div className="bold-header h3">
                                İş Arayan
                            </div>
                            <div>
                                <div className="jobseekerico ico"></div>
                            </div>
                            <div className="description">
                                <ul>
                                    <li>Özgeçmiş oluşturabilirsiniz.</li>
                                    <li>İş ilanlarını görebilir ve başvurabilirsiniz.</li>
                                    <li>İş ilanlarını istediğiniz şekilde filtreleyebilirsiniz.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 bg-white bordered shadow mt-4">
                            <div className="bold-header h3">
                                İş veren
                            </div>
                            <div>

                                <div className="employerico ico"></div>
                            </div>
                            <div className="description">
                                <ul>
                                    <li>İş ilanı oluşturabilirsiniz.</li>
                                    <li>İş ilanına gelen başvuruları inceleyebilirsiniz.</li>
                                    <li>İş ilanlarını düzenleyebilir, silebilir veya aktifliğini değiştirebilirsiniz.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" home-about">
                <div className="container-large text-center mt-8">
                    <div className="">
                        <h1 className="bold-header">Nasıl Kullanırsın?</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3 bordered ">
                            <Icon name="user" size="huge" color="teal"/>
                            <h1>Kayıt Ol</h1>
                            <div className="w-50 m-auto text-center">
                                Kayıt ol butonuna tıkla,
                                Gerekli yerleri doldur ve kayıt ol.
                            </div>
                        </div>
                        <div className="col-md-3 bordered">
                            <Icon name="sign-in" size="huge" color="teal"/>
                            <h1>Giriş Yap</h1>
                            <div className="w-50 m-auto text-center">
                                Giriş Yap butonuna tıkla,
                                Bilgilerini gir ve sisteme giriş yap.
                            </div>
                        </div>
                        <div className="col-md-3 bordered">
                            <Icon name="gg" size="huge" color="teal"/>
                            <h1>Özgeçmiş Oluştur</h1>
                            <div className="w-50 m-auto text-center">
                                Özgeçmiş Oluştur butonuna tıkla,
                                Gerekli yerleri doğru şekilde gir ve özgeçmiş oluştur.
                            </div>
                        </div>
                        <div className="col-md-3 bordered">
                            <Icon name="external alternate" size="huge" color="teal"/>
                            <h1>İş ilanlarını Keşfet</h1>
                            <div className="w-50 m-auto text-center">
                                İş ilanları butonuna tıkla,
                                Sistemde kayıtlı tüm ilanları görebilir
                                ve kendine uygun ilana başvuru yapabilirsin.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
