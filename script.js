function abrirConvite() {
    document.getElementById('telaInicial').style.display = 'none';
    document.getElementById('videoCaixa').style.display = 'block';
  
    const video = document.getElementById('videoAbertura');
    video.play();
  
    video.onended = function () {
      document.getElementById('videoCaixa').style.display = 'none';
      document.getElementById('conteudoConvite').style.display = 'block';
      document.getElementById('musicaFundo').play();
    };
  }
  

  
function abrirVideo() {
  document.getElementById("videoModal").classList.remove("hidden");
  document.getElementById("envelope").style.display = "none";
}

function fecharVideo() {
  const video = document.getElementById("videoCasamento");
  video.pause();
  video.currentTime = 0;
  document.getElementById("videoModal").classList.add("hidden");
  document.getElementById("envelope").style.display = "block";
}
