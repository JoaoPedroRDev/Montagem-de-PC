let BotaoQueCalcula = document.getElementById("botao");

function CalculoTotal() {
    let PrecoProcessador = Number(document.getElementById("processador").value);
    let PrecoPlacaVideo = Number(document.getElementById("PlacaDeVideo").value);
    let PrecoRam = Number(document.getElementById("MemoriaRam").value);
    let QuantidadeMemoriaRam = Number(document.getElementById("QuantidadeRAM").value);
    let PrecoArmazenamento = Number(document.getElementById("Armazenamento").value);

    const seletores = document.getElementsByTagName("select");
    let algumItemSemSelecionar = false;

    for (let i = 0; i < seletores.length; i++) {
        // Remove a classe temporariamente para poder reiniciar a animação se clicar de novo
        seletores[i].classList.remove("erro");

        // Força o navegador a reiniciar a animação no elemento
        void seletores[i].offsetWidth;

        if (Number(seletores[i].value) === 0) {
            seletores[i].classList.add("erro");
            algumItemSemSelecionar = true;
        }
    }

    if (algumItemSemSelecionar) {
        document.getElementById("resultado").innerHTML = "Por favor, selecione todos os componentes!";
        document.getElementById("resultado").style.color = "#ff4d4d";
        return;
    }

    // Cálculo e exibição quando está tudo correto
    const TotalDaSoma = PrecoProcessador + PrecoPlacaVideo + (PrecoRam * QuantidadeMemoriaRam) + PrecoArmazenamento;
    const valorFormatado = TotalDaSoma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("resultado").style.color = "white";
    document.getElementById("resultado").innerHTML = "O seu PC custa: " + valorFormatado;
}

BotaoQueCalcula.addEventListener("click", CalculoTotal);


// https://www.kaggle.com/datasets/warcoder/pc-parts/data