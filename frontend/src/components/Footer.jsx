import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div className="bg-light pb-5">
            <div className="social-links bg-footer">
                <Label className="container-large m-auto bg-footer d-flex justify-content-around align-items-center">
                    <div className="font-large text-dark">
                        Bizi sosyal medyada takip edin!
                    </div>
                    <div>
                        <Button color='facebook' icon="facebook" circular size="big" />
                        <Button color='twitter' icon="twitter" circular size="big" />
                        <Button color='linkedin' icon="linkedin" circular size="big" />
                        <Button color='instagram' icon="instagram" circular size="big" />
                        <Button color='youtube' icon="youtube" circular size="big" />
                    </div>
                </Label>
            </div>
            <div className="m-5 footer-main bg-light">
                <div className="row container-large m-auto">
                    <div className="col-md-3">
                        <h3 className="bold-header">Hakkımızda</h3>
                        <hr className="w-25 line" />
                        <div className="description p-0">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus eos commodi minus repudiandae quos at voluptates consequuntur, necessitatibus non!
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bold-header">Kurumsal</h3>
                        <hr className="w-25 line" />
                        <div>
                            <a href="#" className="d-block mt-4">Sözleşmeler</a>
                            <a href="#" className="d-block mt-4">Veri Politikası</a>
                            <a href="#" className="d-block mt-4">İnsan kaynakları</a>
                            <a href="#" className="d-block mt-4">Sitemap</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bold-header">Yararlı Bağlantılar</h3>
                        <hr className="w-25 line" />
                        <div>
                            <a href="#" className="d-block mt-4">Kariyer Planları</a>
                            <a href="#" className="d-block mt-4">Özgeçmiş nasıl oluşturulur?</a>
                            <a href="#" className="d-block mt-4">Başvuru Nasıl yapılır?</a>
                            <a href="#" className="d-block mt-4">Mülakat taktikleri</a>
                            <a href="#" className="d-block mt-4">Tüm Blog Yazıları</a>
                            <a href="#" className="d-block mt-4">Sıkça sorulan sorular</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bold-header">İletişim</h3>
                        <hr className="w-25 line" />
                        <div className="description p-0">
                            <div><Icon name="home" size="large"/>Düziçi, Osmaniye, Türkiye</div>
                            <div><Icon name="mail" size="large"/>info@ikariyer.com</div>
                            <div><Icon name="phone" size="large"/>+90 850 123 4567</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bold-header">
                &copy; 2021 - Tüm hakları saklıdır. <Link >iKariyer.com</Link>
            </div>
        </div>
    )
}
