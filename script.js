const videos = document.querySelectorAll('video')
const container = document.querySelector('videos-container')


function tocarVideo(){

  const alturaTela =  window.innerHeight

  const videoAtual = Math.round(container.scrollTop / alturaTela)

  console.log(videoAtual)

  videos.forEach
}