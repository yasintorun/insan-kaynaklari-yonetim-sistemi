import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmployerDetail from '../EmployerDetail'
import MessageBox from '../../components/MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import EmployerService from '../../services/employerService'
import UpdateEmployerInfoService from '../../services/UpdateEmployerInfoService'
import BackButton from '../../components/BackButton'
export default function AdminEmployerDetails() {
    let { id } = useParams()
    const [employer, setEmployer] = useState({})
    const [updateEmployer, setUpdateEmployer] = useState({})
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getById(id).then(result => setEmployer(result.data.data))

        let updateEmployerService = new UpdateEmployerInfoService();
        updateEmployerService.getById(id).then(result => {
            if (result.data.success) {
                setUpdateEmployer(result.data.data)
            }
        })

    }, [])
    return (
        <div>
            <div>
                <div className="w-100 m-auto mb-5">
                    <BackButton /> 
                    <MessageBox>
                        <div>
                            Bilgiler
                        </div>
                        <div className="d-flex">
                            <div className="w-25 d-block">
                                <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100" />
                            </div>
                            <div className="w-75 ms-4">
                                <div>
                                    <h2>{employer?.companyName}  </h2>
                                    <div className="d-flex justify-content-between w-75 mb-4">
                                        <div>
                                            <YTInfoMessage info="E-posta adresi" text={employer.eposta} />
                                            <YTInfoMessage info="Website adresi" text={employer.website} />
                                            <YTInfoMessage info="Telefon Numarası" text={employer.phone} />
                                            <YTInfoMessage info="Şirket hakkında özet bilgi" text={employer.summary} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MessageBox>

                    <MessageBox>
                        <div>
                            Güncellenmiş Yeni veriler
                        </div>
                        <div className="d-flex">
                            <div className="w-25 d-block">
                                <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100" />
                            </div>
                            <div className="w-75 ms-4">
                                <div>
                                    <h2>{employer?.companyName}  </h2>
                                    <div className="d-flex justify-content-between w-75 mb-4">
                                        <div>
                                            <YTInfoMessage info="E-posta adresi" text={employer.eposta} />
                                            <YTInfoMessage info="Website adresi" text={employer.website} />
                                            <YTInfoMessage info="Telefon Numarası" text={employer.phone} />
                                            <YTInfoMessage info="Şirket hakkında özet bilgi" text={employer.summary} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MessageBox>
                </div>
            </div>
        </div>
    )
}
