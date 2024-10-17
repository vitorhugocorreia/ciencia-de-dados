const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGblobais() {
    const re = await fetch(url)
    const dados = await re.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = 'Você sabia que o muno tem ${dados.total_pesoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas em alguma rede social e passam em média ${dados.tempo_medio} hora conectadas.'

    const container = documente.getElementById('grafico-container')
    container.appenChil(paragrafo)
}

visualizarInformacoesGblobais();