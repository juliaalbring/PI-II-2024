<template>

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
