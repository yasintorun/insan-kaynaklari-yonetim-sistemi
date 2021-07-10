import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Label, Icon, Button, Segment } from 'semantic-ui-react'
import Helper from '../utilities/Helper'
import { toast } from 'react-toastify'
import FavoriteJobAdvertService from '../services/favoriteJobAdvert'
import JobAdvertCardInfo from './JobAdvertCardInfo'

export default function JobPost({ jobAdvert }) {
    const [favorite, setFavorite] = useState({})
    let favoriteJobAdvertService = new FavoriteJobAdvertService()

    useEffect(() => {
        favoriteJobAdvertService.getById(1, jobAdvert.id).then(result => {
            setFavorite(result.data.data)
        }).catch(result => console.log(result))
    }, [])

    const handleAddFavoriteClick = () => {

        if (favorite != null) {
            favoriteJobAdvertService.deleteById(favorite.id).then(r => console.log(r.data))
            toast.success(`Favorilerden çıkarıldı`)
        } else {
            favoriteJobAdvertService.add({ jobAdvertId: jobAdvert.id, userId: 1 }).then(r => console.log(r.data))
            toast.success(`Favorilere eklendi`)
        }

        setTimeout(() => {
            favoriteJobAdvertService.getById(1, jobAdvert.id).then(result => setFavorite(result.data.data))
        }, 200)

        //setIsAddedFavorite(!isAddedFavorite)
    }


    return (
        <div >
            <div className="bordered bg-light-blue  ms-4 mb-4 p-3 hover-shadow font-small position-relative">
                <Segment basic as={NavLink} to={'/jobseeker_dashboard/jobpost_detail/' + jobAdvert.id} className="color-grey">
                    <JobAdvertCardInfo jobAdvertisement={jobAdvert} isSmall />
                </Segment>
                <div>
                    <Button size="big"  icon = {favorite != null ? "heart" : "heart outline"} className="z-index-1 topright text-danger" onClick={() => handleAddFavoriteClick()}/>
                </div>
            </div>
        </div>
    )
}


/*
 <Card className="w-75 m-auto mb-5 p-3 shadow position-relative"  as={NavLink} to={'/detail/' + jobAdvert.id}>
                <Card.Content>

                    <JobAdvertCardInfo  jobAdvertisement={jobAdvert}/>
                    {<div className="header d-flex justify-content-between">
                        <Card.Header className="mt-1">{jobAdvert.jobPosition?.jobName}</Card.Header>

                    </div>
                    <div >
                        <p className="mt-3">{jobAdvert.employer?.companyName}</p>
                        <Card.Meta className="mt-3"><Icon name="point" />{jobAdvert.city?.cityName}</Card.Meta>
                        <Card.Description className="mt-4 p-0"  >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Label as='a' color='teal' size="small">
                                        {jobAdvert.workStyle?.name}
                                    </Label>
                                    <Label as='a' color='pink' size="small">
                                        {jobAdvert.workTimeStyle?.name}
                                    </Label>
                                </div>
                                <Card.Meta>
                                    {Helper.DateAgo(new Date(jobAdvert.releaseDate)) + " gün önce"}
                                </Card.Meta>
                            </div>
                        </Card.Description>
                    </div>}
                    </Card.Content>
                    <div>
                        <Button size="big" icon="heart outline" className="z-index-1 topright"/>
                    </div>
                </Card>

*/