import React from 'react'
import MessageBox from '../MessageBox'
import {Label } from 'semantic-ui-react'
export default function SkillInfo() {
    return (
        <div>
            <MessageBox >
                <div>Yetenekler</div>
                <div className="d-s ">
                    <Label color="teal">C++</Label>
                    <Label color="teal">Java</Label>
                    <Label color="teal">C#</Label>
                    <Label color="teal">Javascript</Label>
                    <Label color="teal">React</Label>
                </div>
            </MessageBox>
        </div>
    )
}
