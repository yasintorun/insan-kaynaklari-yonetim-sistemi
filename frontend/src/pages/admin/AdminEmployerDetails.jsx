import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmployerDetail from '../EmployerDetail'
import MessageBox from '../../components/MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import EmployerService from '../../services/employerService'
import UpdateEmployerInfoService from '../../services/UpdateEmployerInfoService'
import BackButton from '../../components/BackButton'
import { Button } from 'semantic-ui-react'
export default function AdminEmployerDetails() {
    let { id } = useParams()
    const [employer, setEmployer] = useState({})
    const [updateEmployer, setUpdateEmployer] = useState({})
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getById(id).then(result => setEmployer(result.data.data))

        

    }, [])

    useEffect(() => {
        let updateEmployerService = new UpdateEmployerInfoService();
        updateEmployerService.getById(id).then(result => {
            setUpdateEmployer(result.data.data)
            console.log(result.data.data)
            if (result.data.success) {
               
            }
        })
    }, [employer])

    const handleEmployerConfirmClick = () => {
        let updateEmployerService = new UpdateEmployerInfoService();
        updateEmployerService.confirmByAdmin(id).then(result => console.log(result.data))

        setTimeout(() => {
            let employerService = new EmployerService()
            employerService.getById(id).then(result => setEmployer(result.data.data))
        }, 300)
        
    }


    return (
        <div>
            <div className="mb-5">
                    <BackButton />
                <div className={updateEmployer != null ? "d-flex justify-content-between" : ""}>
                    <MessageBox>
                        <div className="mb-2">
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
                    {
                        updateEmployer != null
                            ? <div>
                                <MessageBox>
                                    <div>
                                        <span>Güncellenmiş Yeni veriler</span>
                                        <Button positive className="ms-4" size="small" onClick={() => handleEmployerConfirmClick()}>Onayla</Button>
                                        <Button negative className="ms-4" size="small">Onaylama</Button>
                                    </div>
                                    <div className="d-flex">
                                        <div className="w-25 d-block">
                                            <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100" />
                                        </div>
                                        <div className="w-75 ms-4">
                                            <div>
                                                <h2>{updateEmployer?.companyName}  </h2>
                                                <div className="d-flex justify-content-between w-75 mb-4">
                                                    <div>
                                                        <YTInfoMessage info="E-posta adresi" text={updateEmployer.eposta} />
                                                        <YTInfoMessage info="Website adresi" text={updateEmployer.website} />
                                                        <YTInfoMessage info="Telefon Numarası" text={updateEmployer.phone} />
                                                        <YTInfoMessage info="Şirket hakkında özet bilgi" text={updateEmployer.summary} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MessageBox>
                            </div>
                            : null
                    }


                </div>
            </div>
        </div>
    )
}
