import React from 'react'
import { Divider, Icon, Rating } from 'semantic-ui-react'
import PersonalInfo from '../../components/Resume/PersonalInfo'
import YTInfoBox from '../../utilities/YTInfoBox'

export default function JobseekerProfile() {
    return (
        <div className="bg-white">
            <div>
                <div>
                    <div align="center" className="pt-5 mb-5">
                        <img width="200" height="200" src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle img-fluid" />
                        <h1 className="bold-header text-secondary user-name">Yasin Torun</h1>
                    </div>
                    <div>
                        <div className="w-75 m-auto">
                            <h3 className="app-statistics">İstatistikler</h3>

                            <div className="row">
                                <YTInfoBox message="Toplam başvurularım" bgColor="bg-info" statistics={15} icon="box" />

                                <YTInfoBox message="Favori başvurularım" bgColor="bg-success" statistics={10} icon="thumbs up" />

                                <YTInfoBox message="Reddedilen başvurularım" bgColor="bg-danger" statistics={5} icon="thumbs down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
