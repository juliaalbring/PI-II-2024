<template>
  <header>
    <nav>
      <a href="#" class="logo">
        <img src="../../public/assets/nave-logo.png" alt="Logo do site" />
      </a>
      <ul>
        <li><a href="index">Página Principal</a></li>
        <li><a href="linha">Linha do Tempo</a></li>
        <li><a href="historia">História</a></li>
        <li><a href="forum">Fórum</a></li>
        <li><a href="artigo" class="active">Artigo</a></li>
      </ul>
      <a href="#" class="profile">
        <img src="../../public/assets/profile.png" alt="Ícone de um perfil" />
      </a>

      <a class="button" href="#popup1"><img src="../../public/assets/Menu.png"></a>

        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>Menu</h2>
            <a class="close" href="#">×</a>
            <div class="content">
              <a href="index">Página Principal<br><br></a>
              <a href="linha">Linha do tempo<br><br></a>
              <a href="historia">História das sondas<br><br></a>
              <a href="forum">Fórum<br><br></a>
              <a href="artigo" class="active">Artigo<br><br></a>
              <a href="#">Perfil do usuário</a>
            </div>
            <div class="redes">
              <h2>Nossas redes Sociais</h2>
              <a href="https://instagram.com/beyond.glx" target="_blank">Instagram</a>
              <br>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdtccrQmBqXgfxfDsVClphnZFVqJtVRDRlQpDvrhPqvfRzKSbxFStQbzbkkQmwTBNjrVb" target="_blank">E-mail</a>
              <br>
            </div>
          </div>
        </div>
    </nav>
    <div class="div-hero">
    <section class="hero">
      <h1>Beyond<span>Galaxy</span></h1>
      <p>Descubra um dos maiores<br> projetos humanos para a <br>exploração espacial</p>
      <button><a href="#intro">↓</a></button>
    </section>
    </div>
  </header>

  <div class="seta"></div>

  <center><section class="article" id="intro">
    <div>
      <h1>NOSSO ARTIGO</h1>
      <h4>A MISSÃO MAIS LONGA DE TODOS OS TEMPOS: AS SONDAS VOYAGER</h4>
      <p>A exploração do espaço e seus meios, como as Sondas Voyager, são
 tópicos muito recorrentes no dia a dia. Obtendo conhecimento desse fato,
 buscou-se por meio deste artigo responder três principais questionamentos:
 “Qual foi o objetivo principal das sondas ao serem lançadas pela NASA?”,
 “O que é o Disco de Ouro e como ele funciona?” e também “Quais foram os
 desafios técnicos encontrados pelos engenheiros ao manterem as sondas orbi
tando?”. Dentre os objetos de pesquisa, os artigos científicos se sobressaem
 já que grande parte das informações e dados são encontrados neles. A pes
quisa analisa os desafios técnicos e operacionais enfrentados, as descobertas
 científicas realizadas e as estratégias inovadoras empregadas para manter as
 sondas operacionais, oferecendo recomendações para futuras missões espaci
ais de longa duração. Concluindo assim que as Sondas Voyager forneceram
 dados inéditos sobre esses planetas e seus satélites.</p>
    </div>
    <button id="button" v-on:click="download">Download PDF</button>

  </section></center>

  <footer>
    <div>
      <h1>Sobre a Beyond<span>Galaxy</span></h1>
      <hr>
      <p>Descubra um dos maiores projetos humanos para exploração espacial.
      </p>
      <img src="../../public/assets/IFC.png" alt="Logo IFC Concórdia">
  </div>
  <div class="footer-left">
    <h1>Links</h1>
    <hr>
    <ol>
      <a href="https://instagram.com/beyond.glx" target="_blank"><li>Instagram</li></a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdtccrQmBqXgfxfDsVClphnZFVqJtVRDRlQpDvrhPqvfRzKSbxFStQbzbkkQmwTBNjrVb" target="_blank"><li>E-mail</li></a>
    </ol>
  </div>
  </footer>
</template>

<script>
window.onload=function(){
function download(){
      const link = document.createElement("a")
      link.href = "/assets/A_missão_mais_longa_de_todos_os_tempos__Sonda_Voyager.pdf"
      link.setAttribute("download", "Artigo.pdf")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(function() { URL.revokeObjectURL(link.href); },1500)
}

let btn = document.getElementById("button")
btn.addEventListener("click", download)
}

export default {
  name: 'artigoSondas',
  components: {

  }
}

</script>

<style scoped>

.article{
  display: flex;
  width: 66rem;
  margin: -12rem 0 6rem 0;
}

.article p{
  font-size: 1.4rem;
}

.article div{
  color: white;
  text-align: justify;
  width: 31.8rem;
  margin: 0 9rem 0 0;
}

.article button{
border: none;
  margin-top: 25%;
  background-color: #2552EA;
  width: 24.8rem;
  height: 7rem;
  border-radius: 60px;
  color: white;
  font-size: 1.4rem;
}

.article button:hover{
  cursor: pointer;
}

.article h1{
  font-size: 3.12rem;
  text-align: center;
  font-weight: normal;
}

.article h4{
  font-size: 1.3rem;
  text-align: center;
  color:#2552EA;
  font-weight: normal;
  margin-bottom: 2rem;
}

@media screen and (max-width: 1200px) {
center{
  width: 50%;
  margin: 0%;
  justify-content: center;
}

  .article{
    width: 50%;
    display: block;
    text-align: center;
    margin: -12rem 0 0 0;
  }

  .article div{
    margin: 0;
    width: 300%;
    justify-content: center;
  }

  .article button{
    width: 300%;
  }
}
</style>
