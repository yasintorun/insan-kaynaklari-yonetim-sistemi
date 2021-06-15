import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Image, Table, Label, Segment, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import WorkStyleService from '../services/workStyleService'
export default function JobPostDetail() {
    let { id } = useParams()
    const [jobAdvertisement, setjobAdvertisement] = useState({})
    const [workStyles, setWorkStyles] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertisementService()
        jobAdvertService.getJobAdvertisementById(id).then(result => setjobAdvertisement(result.data.data))

    }, [])

    return (
        <div className="page-center">
            <div className="bordered shadow w-75 m-auto">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Backend Programlama</h2>
                        <Label as='a' color='purple' >
                            {jobAdvertisement.workStyle}
                        </Label>
                        <Label as='a' color='red'>
                            {jobAdvertisement.workTimeStyle}
                        </Label>
                    </div>
                    <div className="card col-md-4">
                        <div className="card-body">
                            <h2 className="card-title color-theme">Logo Yazılım</h2>
                            <h6 class="card-subtitle mb-2 text-muted"><a href="">https://www.logo.com</a></h6>
                            <h6 class="card-subtitle mb-2 text-muted">info@logo.com</h6>
                            <p class="card-text">Biz kurumsal şirketizdir. Şöyleyiz böyleyiz</p>
                            <Label color='teal' tag>
                                Osmaniye
                            </Label>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="">
                        <Segment.Group horizontal >
                            <Segment padded color="teal">
                                <Label attached='top'>Kontenjan</Label>
                                <p>22</p>
                            </Segment>
                            <Segment padded color="teal">
                                <Label attached='top'>Minimum maaş</Label>
                                <p>3500</p>
                            </Segment>
                            <Segment padded color="teal">
                                <Label attached='top'>maksimum maaş</Label>
                                <p>5000</p>
                            </Segment>
                        </Segment.Group>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <Segment horizontal color="teal">

                            <Label attached='top'>İş Tanımı</Label>
                            <p>
                                <ul className>
                                    <li className="mt-3">Sorumluluğundaki  Müşteri gruplarının dış aramalar yapılarak bağlayıcılıklarını, hedeflerini, risklerini , şikayetlerini izlemek ve gerekli aksiyonların alınması ve takipçisi olunması.</li>
                                    <li className="mt-3">Sorumluluğundaki müşterilerine ürünlerin satışının gerçekleştirilmesi.</li>
                                    <li className="mt-3">Müşterilerindeki olası satış fırsatlarını değerlendirerek aylık performans hedeflerinin yerine getirilmesi.Müşterilerine etkin, hızlı ve kaliteli hizmet verilmesi için gerekli desteğin sağlanması.</li>
                                    <li className="mt-3">Müşterilerindeki olası satış fırsatlarını değerlendirerek aylık performans hedeflerinin yerine getirilmesi.Müşterilerine etkin, hızlı ve kaliteli hizmet verilmesi için gerekli desteğin sağlanması.</li>
                                </ul>
                            </p>
                        </Segment>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Button color='green'>Başvur</Button>
                </div>
            </div>
        </div>
    )
}
