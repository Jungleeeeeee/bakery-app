
export default function MainArticle(){
    return(
        <div>
            <h2>Временная акция!</h2>
            <p>Не пропустите наше наивкуснейшее предложение по аппетитной цене, звоните по номеру +7 999 999 99 99</p>
            <video controls  width="250" height="250">
                <source  src="./public/video/cake.mp4" type="video/mp4"/>
                <source src="./public/video/cake.ogv" type="video/ogg"/>
                <source src="./public/video/cake.avi" type="video/avi"/>
        <p>Ваш браузер не поддерживает встроенные видео. Загрузите ролик по<a href="my-video.mp4"> ссылке</a></p>
            </video>
        </div>
    )
}