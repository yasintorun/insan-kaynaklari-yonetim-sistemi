import React, { useEffect, useState } from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Label, Segment, Button, Icon, Popup } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import BackButton from '../components/BackButton'
import FavoriteJobAdvertService from '../services/favoriteJobAdvert'
import JobAdvertCardInfo from '../components/JobAdvertCardInfo'
import Swal from 'sweetalert2'
import Helper from '../utilities/Helper'
export default function JobPostDetail(props) {
    let { id } = useParams()
    const [jobAdvertisement, setjobAdvertisement] = useState({})
    const [isAdmin, setIsAdmin] = useState(true)

    const [favorite, setFavorite] = useState({})

    let jobAdvertService = new JobAdvertisementService()
    let favoriteJobAdvertService = new FavoriteJobAdvertService()
    function handleAdmin(params) {
        setIsAdmin(true)
    }

    function handleOther(params) {
        setIsAdmin(false)
    }

    const handleAddFavoriteClick = () => {

        if (favorite != null) {
            favoriteJobAdvertService.deleteById(favorite.id).then(r => console.log(r.data))
            toast.success(`Favorilerden çıkarıldı`)
        } else {
            favoriteJobAdvertService.add({ jobAdvertId: id, userId: 1 }).then(r => console.log(r.data))
            toast.success(`Favorilere eklendi`)
        }

        setTimeout(() => {
            favoriteJobAdvertService.getById(1, id).then(result => setFavorite(result.data.data))
        }, 200)

        //setIsAddedFavorite(!isAddedFavorite)
    }



    const handleOnSubmit = (jobAdvertisement) => {
        const msg = jobAdvertisement.active ? 'Deaktif edildi' : 'onaylandı'
        toast.success(`${jobAdvertisement.id} ${msg}`)
        jobAdvertService.changeActive(!jobAdvertisement.active, jobAdvertisement.id).then()

    }
    const handleDeleteJobAdvertClick = () => {
        
        //
        Helper.DeleteModalBox("İş ilanı", "İş ilanını silersen tekrar geri getiremezsin!", () => jobAdvertService.delete(jobAdvertisement.id)).then(() => {
            
        })
    }

    useEffect(() => {
        jobAdvertService.getJobAdvertisementById(id).then(result => setjobAdvertisement(result.data.data))
        favoriteJobAdvertService.getById(1, id).then(result => {
            setFavorite(result.data.data)
        })
    }, [])


    const ButtonsForUserTypes = () => {
        switch (props.userType) {
            case "ADMIN":
                return (
                    <div>
                        Admin İçin buttonlar
                    </div>
                )
            case "EMPLOYER":
                return (
                    <div>
                        <Button color="blue big" as={NavLink} to={{pathname: "/employer_dashboard/new-job-advert", initialVal: jobAdvertisement}}>Düzenle</Button>
                        <Button color="red big" onClick={() => handleDeleteJobAdvertClick()}>Sil</Button>
                    </div>
                )
            case "JOBSEEKER":
            default:
                return (
                    <div>
                        <Button color="blue big" >Başvur</Button>
                        
                        <Popup
                            position = "bottom right"
                            content={favorite != null ? "Favorilerden çıkar" : "Favorilere ekle"}
                            trigger={<Button icon={favorite != null ? "heart" : "heart outline"} size="big" color="red" basic onClick={() => handleAddFavoriteClick()} />} 
                        />
                    </div>
                )
        }
    }


    return (
        <div className="bg-white">
            <div className="bg-light-blue">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-sm-8">
                            <JobAdvertCardInfo jobAdvertisement={jobAdvertisement} />
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <div align="right">
                                    <div>
                                        Son başvuru tarihi: <span className="text-danger bold-header">{jobAdvertisement.deadline}</span>
                                    </div>
                                    {
                                        <div className="mt-3">
                                            <ButtonsForUserTypes />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="container">
                    <div className="row mt-5 color-grey">
                        <div className="col-md-8">
                            <h3 className="color-dark mb-2">İş Tanımı</h3>

                            <div>
                                {/* {Bankacılık sektöründe faaliyet gösteren firmada danışman olarak çalışarak ilgili projelere destek vermek.
                                <br />
                                <h3>Genel nitelikler</h3>
                                <ul>
                                    <li>Üniversitelerin ilgili alanlarından mezun,</li>
                                    <li>Bankacılık sektöründe çalışma deneyimine sahip,</li>
                                    <li>En az 3 yıl kurumsal krediler & leasing yazılım geliştirme çalışmalarında yer almış,</li>
                                    <li>Analitik düşünme ve problem çözme yetkinliğine sahip,</li>
                                    <li>Nesneye yönelik programlama deneyimine sahip,</li>
                                    <li>C#, .Net, HTML, CSS ve Javascript, JQuery konularında bilgi ve deneyim sahibi,</li>
                                    <li>Veritabanı SQL programlama dili, Transact-SQL, MS-SQL deneyimi olan,</li>
                                    <li>Erkek adaylar için askerlik görevini tamamlamış ya da en az 2 yıl tecilli.</li>
                                </ul>} */}
                                <div dangerouslySetInnerHTML={{ __html: jobAdvertisement.description }} />
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="bg-light-blue p-4 ps-5 mb-5 rounded-w">
                                <h3>Genel Bilgiler</h3>
                                <InfoMessage header="Yayınlanma tarihi" text={jobAdvertisement.releaseDate} iconName="calendar" />
                                <InfoMessage header="Şehir" text={jobAdvertisement.city?.cityName} iconName="location arrow" />
                                <InfoMessage header="Maaş Skalası" text={<span>{jobAdvertisement.minSalary} - {jobAdvertisement.maxSalary}<Icon name="lira" /></span>} iconName="money" />
                                <InfoMessage header="Çalışma Şekli" text={jobAdvertisement.workStyle?.name} iconName="home" />
                                <InfoMessage header="Çalışma zamanı" text={jobAdvertisement.workTimeStyle?.name} iconName="clock" />
                            </div>

                            <div className="bg-light-blue p-4 ps-5 mb-5 rounded-w">
                                <h3>Firma Bilgileri</h3>

                                <div className="d-flex">
                                    <div className="logo">
                                        <img width="70" height="70" src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/y12.jpg" className="rounded" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h3>{jobAdvertisement.employer?.companyName}</h3>
                                        <a href="#">Firma profilini görüntüle</a>
                                    </div>

                                </div>
                                <InfoMessage header="Şehir" text={jobAdvertisement.city?.cityName} iconName="location arrow" />
                                <InfoMessage header="Telefon Numarası" text={jobAdvertisement.employer?.phone} iconName="phone" />
                                <InfoMessage header="Eposta" text={jobAdvertisement.employer?.eposta} iconName="mail" />
                                <InfoMessage header="Website adresi" text={jobAdvertisement.employer?.website} iconName="linkify" />
                            </div>

                        </div>




                    </div>
                </div>
            </div>

        </div>
    )



}

const InfoMessage = ({ header, text, iconName }) => {
    return (
        <div className="mt-3">
            <div className="d-flex">
                <div>
                    <Icon name={iconName} />
                </div>
                <div>
                    <div className="bolder color-dark">
                        {header}
                    </div>
                    <div>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}






/*
Eski tasarım



 <div>

            <BackButton className="w-75 m-auto mt-2" />
            <div className="page-center">


                <div className="shadow-no-hover bordered shadow w-75 m-auto position-relative">
                    <div className="topright">
                        <Button icon={favorite != null ? "heart" : "heart outline"} color="red" basic className="shadow" onClick={() => handleAddFavoriteClick()}/>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <h2>{jobAdvertisement.jobPosition?.jobName}</h2>
                            <Label as='a' color='purple' >
                                {jobAdvertisement.workStyle?.name}
                            </Label>
                            <Label as='a' color='red'>
                                {jobAdvertisement.workTimeStyle?.name}
                            </Label>
                        </div>
                        <div className="card col-md-4">
                            <div className="card-body">

                                <h2 className="card-title color-theme">{jobAdvertisement.employer?.companyName}</h2>
                                <h6 className="card-subtitle mb-2 text-muted"><a href="">{jobAdvertisement.employer?.website}</a></h6>
                                <h6 className="card-subtitle mb-2 text-muted">{jobAdvertisement.employer?.eposta}</h6>
                                <p className="card-text">{jobAdvertisement.employer?.summary}</p>

                                <Label color='teal' tag>
                                    {jobAdvertisement.city?.cityName}
                                </Label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="">
                            <Segment.Group horizontal >
                                <Segment padded color="teal">
                                    <Label attached='top'>Kontenjan</Label>
                                    <p>{jobAdvertisement.maxPerson}</p>
                                </Segment>
                                <Segment padded color="teal">
                                    <Label attached='top'>Minimum maaş</Label>
                                    <p>{jobAdvertisement.minSalary}</p>
                                </Segment>
                                <Segment padded color="teal">
                                    <Label attached='top'>maksimum maaş</Label>
                                    <p>{jobAdvertisement.maxSalary}</p>
                                </Segment>
                            </Segment.Group>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <Segment horizontal color="teal">

                                <Label attached='top'>İş Tanımı</Label>
                                <div dangerouslySetInnerHTML={{ __html: jobAdvertisement.description }} />
                            </Segment>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        {
                            isAdmin
                                ? <div>
                                    <Button color='green'
                                        onClick={() => handleOnSubmit(jobAdvertisement)}>
                                        {
                                            jobAdvertisement.active ? "De-Aktif et" : "Onayla"
                                        }

                                    </Button>
                                    <Button color='red'>Sil</Button>
                                </div>
                                : <Button color='green'>Başvur</Button>

                        }

                    </div>
                </div>
            </div>
        </div>



*/