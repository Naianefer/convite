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
  