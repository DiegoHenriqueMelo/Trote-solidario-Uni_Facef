window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
})
function sim(){
    let div = document.getElementById("div-input")
   

    if(div.style.display == 'none'){
        div.style.display = 'block'
    }else{
        div.style.display = 'block'
    }

}
function nao(){
    let div = document.getElementById("div-input")
   

    if(div.style.display == 'block'){
        div.style.display = 'none'
    }else{
        div.style.display = 'none'
    }

}

function calcAm(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let inp1 = Number(document.getElementById('inp-1').value)
    let inp2 = Number(document.getElementById('inp-2').value)
    let inp3 = Number(document.getElementById('inp-3').value)
    let inp4 = Number(document.getElementById('inp-4').value)
    let inp5 = Number(document.getElementById('inp-5').value)
    let inp6 = Number(document.getElementById('inp-6').value)
    let inp7 = Number(document.getElementById('inp-7').value)
    let inp8 = Number(document.getElementById('inp-8').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20

    if(kit >= 91){
        valKit = 5000
    }else if(kit >=72 && kit < 91){
        valKit== 4000
    }else if(kit >= 45 && kit < 72){
        valKit = 2500
    }else if(kit >=20 && kit < 45){
        valKit = 1000
    }else{
        valKit = 0
    }

    let total = leite + sangue + acao + mascote + quiz + extra + valKit + inp1 + inp2 + inp3 + inp4 + inp5+ inp6+ inp7+ inp8

    window.document.getElementById("resp-am").innerHTML = total

}
function calcLr(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let inp1 = Number(document.getElementById('inp-1').value)
    let inp2 = Number(document.getElementById('inp-2').value)
    let inp3 = Number(document.getElementById('inp-3').value)
    let inp4 = Number(document.getElementById('inp-4').value)
    let inp5 = Number(document.getElementById('inp-5').value)
    let inp6 = Number(document.getElementById('inp-6').value)
    let inp7 = Number(document.getElementById('inp-7').value)
    let inp8 = Number(document.getElementById('inp-8').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20

    if(kit >= 84){
        valKit = 5000
    }else if(kit >=67 && kit < 84){
        valKit== 4000
    }else if(kit >= 42 && kit < 67){
        valKit = 2500
    }else if(kit >=16 && kit < 42){
        valKit = 1000
    }else{
        valKit = 0
    }

    let total = leite + sangue + acao + mascote + quiz + extra + valKit + inp1 + inp2 + inp3 + inp4 + inp5+ inp6+ inp7+ inp8

    window.document.getElementById("resp-lr").innerHTML = total

}
function calcRx(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let inp1 = Number(document.getElementById('inp-1').value)
    let inp2 = Number(document.getElementById('inp-2').value)
    let inp3 = Number(document.getElementById('inp-3').value)
    let inp4 = Number(document.getElementById('inp-4').value)
    let inp5 = Number(document.getElementById('inp-5').value)
    let inp6 = Number(document.getElementById('inp-6').value)
    let inp7 = Number(document.getElementById('inp-7').value)
    let inp8 = Number(document.getElementById('inp-8').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20

    if(kit >= 84){
        valKit = 5000
    }else if(kit >=67 && kit < 84){
        valKit== 4000
    }else if(kit >= 42 && kit < 67){
        valKit = 2500
    }else if(kit >=16 && kit < 42){
        valKit = 1000
    }else{
        valKit = 0
    }
    let total = leite + sangue + acao + mascote + quiz + extra + valKit + inp1 + inp2 + inp3 + inp4 + inp5+ inp6+ inp7+ inp8

    window.document.getElementById("resp-rx").innerHTML = total

}
function calcVd(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let inp1 = Number(document.getElementById('inp-1').value)
    let inp2 = Number(document.getElementById('inp-2').value)
    let inp3 = Number(document.getElementById('inp-3').value)
    let inp4 = Number(document.getElementById('inp-4').value)
    let inp5 = Number(document.getElementById('inp-5').value)
    let inp6 = Number(document.getElementById('inp-6').value)
    let inp7 = Number(document.getElementById('inp-7').value)
    let inp8 = Number(document.getElementById('inp-8').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20

    if(kit >= 81){
        valKit = 5000
    }else if(kit >=67 && kit < 81){
        valKit== 4000
    }else if(kit >= 42 && kit < 67){
        valKit = 2500
    }else if(kit >=16 && kit < 42){
        valKit = 1000
    }else{
        valKit = 0
    }
    let total = leite + sangue + acao + mascote + quiz + extra + valKit + inp1 + inp2 + inp3 + inp4 + inp5+ inp6+ inp7+ inp8

    window.document.getElementById("resp-vd").innerHTML = total

}
function calcVm(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let inp1 = Number(document.getElementById('inp-1').value)
    let inp2 = Number(document.getElementById('inp-2').value)
    let inp3 = Number(document.getElementById('inp-3').value)
    let inp4 = Number(document.getElementById('inp-4').value)
    let inp5 = Number(document.getElementById('inp-5').value)
    let inp6 = Number(document.getElementById('inp-6').value)
    let inp7 = Number(document.getElementById('inp-7').value)
    let inp8 = Number(document.getElementById('inp-8').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20

    if(kit >= 104){
        valKit = 5000
    }else if(kit >=83 && kit < 104){
        valKit== 4000
    }else if(kit >= 52 && kit < 83){
        valKit = 2500
    }else if(kit >=20 && kit < 55){
        valKit = 1000
    }else{
        valKit = 0
    }
    let total = leite + sangue + acao + mascote + quiz + extra + valKit + inp1 + inp2 + inp3 + inp4 + inp5+ inp6+ inp7+ inp8

    window.document.getElementById("resp-vm").innerHTML = total

}