const videos = document.querySelectorAll('video')
const container = document.querySelector('.videos-container')

videos.forEach(v => {
    v.muted = true
    v.playsInline = true
})
function tocarVideo() {

    const alturaTela = container.clientHeight
    const videoAtual = Math.round(container.scrollTop / alturaTela)

    videos.forEach((video, index) => {
        if (index === videoAtual) {
            video.play().catch(() => { })
        } else {
            video.pause()
            video.currentTime = 0
        }
    })

}

// no clique libera o som do vídeo atual
container.addEventListener('click', () => {
    const alturaTela = container.clientHeight
    const videoAtual = Math.round(container.scrollTop / alturaTela)
    const video = videos[videoAtual]
    if (video){
         video.muted = false
         video.volume = 1
         video.play().catch(()=>{})
    }
} {once: true})

container.addEventListener('scroll', tocarVideo)
tocarVideo()


