import React from 'react'
import YTInfoBox from '../../utilities/YTInfoBox'

export default function EmployerHome() {
    return (
        <div className="bg-white">
            <div>
                <div>
                    <div align="center" className="pt-5 mb-5">
                        <img width="200" height="200" src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle img-fluid" />
                        <h1 className="bold-header text-secondary user-name">Öylesine Bir Şirket</h1>
                    </div>
                    <div>
                        <div className="w-75 m-auto">
                            <h3 className="app-statistics">İstatistikler</h3>
                            <div className="row">
                                <YTInfoBox message="Toplam iş ilanlarım" bgColor="bg-info" statistics={5} icon="box" />

                                <YTInfoBox message="Gelen Toplam başvurular" bgColor="bg-success" statistics={125} icon="thumbs up" />

                                <YTInfoBox message="Boş alan" bgColor="bg-danger" statistics={5} icon="thumbs down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
