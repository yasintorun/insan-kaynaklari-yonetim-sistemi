import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

export default function BackButton(props) {
    const history = useHistory()
    return (
        <div className={props.className}>
            <Button negative onClick={()=>history.goBack()}>
                <Icon name="arrow left"/>Geri Dön
            </Button>
        </div>
    )
}
