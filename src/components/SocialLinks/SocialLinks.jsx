import React from "react";
import style from "./SocialLinks.module.css"
import telegramImage from "../../assets/images/telegram.png"
import youTubeImage from "../../assets/images/youtube.png"
import whatsUpImage from "../../assets/images/whatsup.png"
import twitterImage from "../../assets/images/twitter.png"
const SocialLinks = (props) => {
    return (
        <div>
            <div className={style.links__title}>Подписывайтесь в соцсетях</div>
            <div className={style.social__links}>
                <a href="#" target="_blank"><img src={telegramImage} alt="Telegram" title="Ссылка на Telegram"/></a>
                <a href="#" target="_blank"><img src={whatsUpImage} alt="What's up" title="Ссылка на What's Up"/></a>
                <a href="#" target="_blank"><img src={twitterImage} alt="Twitter" title="Ссылка на Twitter"/></a>
                <a href="#" target="_blank"><img src={youTubeImage} alt="YouTube" title="Ссылка на YouTube"/></a>
            </div>
        </div>
    )
}

export default SocialLinks;