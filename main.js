const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        botoes.forEach((btn) => btn.classList.remove("ativo"));
        textos.forEach((texto) => texto.classList.remove("ativo"));
        botao.classList.add("ativo");
        textos[i].classList.add("ativo");
    });
});

const tempos = [
    new Date("2024-10-05T00:00:00"),
    new Date("2024-12-05T00:00:00"),
    new Date("2024-11-30T00:00:00"),
    new Date("2024-11-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;

    const segundos = Math.floor((tempoFinal / 1000) % 60);
    const minutos = Math.floor((tempoFinal / 1000 / 60) % 60);
    const horas = Math.floor((tempoFinal / 1000 / 60 / 60) % 24);
    const dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}


function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);

        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
comecaCronometro();


