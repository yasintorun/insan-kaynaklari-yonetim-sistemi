import React, { useEffect, useState } from 'react'
import MessageBox from '../components/MessageBox'
import YTInfoMessage from '../utilities/messages/YTInfoMessage'
import EmployerService from '../services/employerService'
import { useParams } from 'react-router'
export default function EmployerDetail({employerId}) {
    
    const [employer, setEmployer] = useState({})
    //let { id } = useParams()
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getById(employerId).then(result => setEmployer(result.data.data))
    }, [employer])
    return (
        <div>   
            <div className="w-75 m-auto mb-5">
                <MessageBox>
                    <div>
                        Bilgiler
                    </div>
                    <div className="d-flex">
                        <div className="w-25 d-block">
                            <img src="https://res.cloudinary.com/dost/image/upload/v1622719799/userPhotos/user1.gif" alt="pp" className="rounded-circle w-100 img-fluid img-thumbnail" />
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
    )
}
