let BotaoQueCalcula = document.getElementById("botao")

function CalculoTotal() {
    let PrecoProcessador = Number(document.getElementById("processador").value);
    let PrecoPlacaVideo = Number(document.getElementById("PlacaDeVideo").value);
    let PrecoRam = Number(document.getElementById("MemoriaRam").value);
    let QuantidadeMemoriaRam = Number(document.getElementById("QuantidadeRAM").value);
    let PrecoArmazenamento = Number(document.getElementById("Armazenamento").value);

    const TotalDaSoma = PrecoProcessador + PrecoPlacaVideo + (PrecoRam * QuantidadeMemoriaRam) + PrecoArmazenamento;

    document.getElementById("resultado").innerHTML = "O seu PC custa: R$ " + TotalDaSoma

    // Verificar se o "select" está com algum item/valor dentro dele
    const seletores = document.getElementsByTagName("select")
    for (let i = 0; i < seletores.length; i++) {
        if (Number(seletores[i].value == 0)) {
            seletores[i].style.border = '1px solid red'
        } else {
            seletores[i].style.border = '1px solid #f2bf07';
        }
    }
}

BotaoQueCalcula.addEventListener("click", CalculoTotal)