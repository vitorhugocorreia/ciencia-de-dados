const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGblobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = 'Você sabia que o muno tem <span>${dados.total_pesoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.'

    const container = document.getElementById('grafico-container')
    container.appenChil(paragrafo)
    //tem um erro ai em cima
}

visualizarInformacoesGblobais();