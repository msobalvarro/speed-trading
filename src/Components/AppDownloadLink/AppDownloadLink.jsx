import React from 'react'
import './AppDownloadLink.scss'

// Import Assets
import AndroidIcon from '../../Assets/android.svg'
import IosIcon from '../../Assets/apple.svg'

const AppsLinks = {
    playstore: 'https://play.google.com/store/apps/details?id=com.speedtradingsapp',
    appstore: '#'
}

const AndroidLink = () => {
    return (
        <a href={AppsLinks.playstore} target="_blank" rel="noopener noreferrer" className="DownloadLink">
            <img src={AndroidIcon} alt=""/>
            Obtener para Android
        </a>
    )
}


const IosLink = () =>  (
        <a href={AppsLinks.appstore} className="DownloadLink">
            <img src={IosIcon} alt=""/>
            Próximamente para IOS
        </a>
    )



export {
    AndroidLink,
    IosLink
}