import React, { Component } from 'react'
import UploadDisplay from '../component/UploadDisplay'

export default class Home extends Component {
    render() {
        return (
            <UploadDisplay url={'/static/upload/1741227051797.jpg'} onSucess={() => {
                console.log(123)
            }}></UploadDisplay>
        )
    }
}