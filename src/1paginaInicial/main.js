import { createApp } from 'vue'
import paginaInicial from './App.vue'

createApp(paginaInicial).mount('#app')

const contents = [
    {
        title: "A Grande Conjunção",
        text: "A grande conjunção é um fenômeno astronômico raro e fascinante, marcado pelo alinhamento dos planetas Júpiter e Saturno em suas órbitas ao redor do Sol. Esse evento ocorre aproximadamente a cada 20 anos, quando os dois maiores planetas do Sistema Solar se aproximam visualmente no céu noturno, chegando a parecer quase um único ponto luminoso para observadores da Terra. Essa proximidade aparente se dá devido à diferença de tempo que cada planeta leva para completar uma volta ao redor do Sol: Júpiter, cerca de 12 anos, e Saturno, aproximadamente 30 anos.",
    },
    {
        title: "As Sondas Voyager",
        text: "A Voyager 1, lançada em 1977, é a sonda espacial mais distante da Terra. Após explorar Júpiter e Saturno, revelou detalhes importantes, como a composição dos anéis de Saturno e a complexidade das luas Titã e Io. Em 2012, tornou-se o primeiro objeto humano a alcançar o espaço interestelar, atravessando a heliopausa. Carrega o Golden Record, um disco com sons, imagens e mensagens da Terra, destinado a possíveis civilizações extraterrestres. Continuando sua jornada, a Voyager 1 envia dados sobre o ambiente interestelar, contribuindo para a compreensão das fronteiras do Sistema Solar e da interação com o meio interestelar.",
    },
    {
        title: "O Disco de Ouro",
        text: "O Disco de Ouro é um artefato cultural e científico levado pelas sondas Voyager 1 e 2, lançadas em 1977. Projetado por Carl Sagan e sua equipe, o disco é uma cápsula do tempo destinada a comunicar a diversidade da vida e da cultura na Terra a possíveis civilizações extraterrestres. Ele contém 116 imagens, saudações em 55 idiomas, sons da natureza, como o canto de pássaros e ondas do mar, além de uma seleção musical que inclui obras de Bach, Beethoven e músicas tradicionais de diversas culturas. O disco, feito de cobre banhado a ouro, está protegido por uma capa que traz instruções para sua reprodução e a localização da Terra no cosmos. Essa mensagem interestelar é um testemunho do desejo humano de conexão e exploração, representando nossa curiosidade e esperança de transcender as fronteiras do Sistema Solar.",
    }
];

function changeContent(index) {
    const textContainer = document.getElementById("text-container");
    const titleElement = document.getElementById("titulo");
    const contentElement = document.getElementById("texto");
    const buttons = document.querySelectorAll(".singlediv");

    setTimeout(() => {
        titleElement.textContent = contents[index - 1].title;
        contentElement.textContent = contents[index - 1].text;
        textContainer.classList.remove("hidden");
    }, 500);
    buttons.forEach((button, idx) => {
        if (idx === index - 1) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
changeContent(1);
