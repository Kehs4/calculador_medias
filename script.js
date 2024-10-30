function media(){
    let nome = window.prompt("Qual o nome do aluno?: ")

    let n1 = Number(window.prompt(`Qual a primeira nota de ${nome}?`)) 

    let n2 = Number(window.prompt(`Além de ${n1}, qual a segunda nota de ${nome}?`))

    let media = (n1 + n2) /2

    res = document.getElementById('result')

    res.innerHTML = `<p>Calculando a média final de ${nome}.</p>`
    res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}.</p>`
    res.innerHTML += `<p>A média final será ${media}.</p>`
}

