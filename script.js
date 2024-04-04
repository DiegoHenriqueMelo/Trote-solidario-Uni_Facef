window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function calcAm(){
    let kit = Number(document.getElementById("kit").value)
    let carac = Number(document.getElementById("carac").value)
    let sangue = Number(document.getElementById("sangue").value)
    let music = Number(document.getElementById("music").value)
    let mascote = Number(document.getElementById("mascote").value)
    let quiz = Number(document.getElementById("quiz").value)
    let ex = Number(document.getElementById("ex").value)
    let foto = Number(document.getElementById("visita1").value)
    let video = Number(document.getElementById("visita2").value)
    let valKit
    let valCarac
    let valSangue
    let valMusic
    let valMascote
    let valQuiz
    let valEx
    let valFoto
    let valVideo
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

    if(carac >= 1){
        valCarac = 100
    }else{
        valCarac = 0
    }

    if(sangue >=1){
        valSangue = 20
    }else{
        valSangue = 0
    }

    if(music >=1){
        valMusic = 1500
    }else{
        valMusic = 0
    }

    if(mascote >=1){
        valMascote =500
    }else{
        valMascote = 0
    }

    if(quiz >=1){
        valQuiz =1000
    }else{
        valQuiz=0
    }

    if(ex >=1){
        valEx=1000
    }else{
        valEx = 0
    }

    if(foto >=1){
        valFoto = 500
    }else{
        valFoto = 0
    }

    if(video >=1){
        valVideo = 500
    }else{
        valVideo = 0
    }

    let resultado = valKit + valCarac + valSangue + valMusic + valMascote + valQuiz + valEx + valFoto + valVideo
    window.document.getElementById("resp-am").innerHTML = resultado
    
}
function calcLr(){
    let kit = Number(document.getElementById("kit").value)
    let carac = Number(document.getElementById("carac").value)
    let sangue = Number(document.getElementById("sangue").value)
    let music = Number(document.getElementById("music").value)
    let mascote = Number(document.getElementById("mascote").value)
    let quiz = Number(document.getElementById("quiz").value)
    let ex = Number(document.getElementById("ex").value)
    let foto = Number(document.getElementById("visita1").value)
    let video = Number(document.getElementById("visita2").value)
    let valKit
    let valCarac
    let valSangue
    let valMusic
    let valMascote
    let valQuiz
    let valEx
    let valFoto
    let valVideo
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

    if(carac >= 1){
        valCarac = 100
    }else{
        valCarac = 0
    }

    if(sangue >=1){
        valSangue = 20
    }else{
        valSangue = 0
    }

    if(music >=1){
        valMusic = 1500
    }else{
        valMusic = 0
    }

    if(mascote >=1){
        valMascote =500
    }else{
        valMascote = 0
    }

    if(quiz >=1){
        valQuiz =1000
    }else{
        valQuiz=0
    }

    if(ex >=1){
        valEx=1000
    }else{
        valEx = 0
    }

    if(foto >=1){
        valFoto = 500
    }else{
        valFoto = 0
    }

    if(video >=1){
        valVideo = 500
    }else{
        valVideo = 0
    }

    let resultado = valKit + valCarac + valSangue + valMusic + valMascote + valQuiz + valEx + valFoto + valVideo
    window.document.getElementById("resp-lr").innerHTML = resultado
    
}
function calcRx(){
    let kit = Number(document.getElementById("kit").value)
    let carac = Number(document.getElementById("carac").value)
    let sangue = Number(document.getElementById("sangue").value)
    let music = Number(document.getElementById("music").value)
    let mascote = Number(document.getElementById("mascote").value)
    let quiz = Number(document.getElementById("quiz").value)
    let ex = Number(document.getElementById("ex").value)
    let foto = Number(document.getElementById("visita1").value)
    let video = Number(document.getElementById("visita2").value)
    let valKit
    let valCarac
    let valSangue
    let valMusic
    let valMascote
    let valQuiz
    let valEx
    let valFoto
    let valVideo
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

    if(carac >= 1){
        valCarac = 100
    }else{
        valCarac = 0
    }

    if(sangue >=1){
        valSangue = 20
    }else{
        valSangue = 0
    }

    if(music >=1){
        valMusic = 1500
    }else{
        valMusic = 0
    }

    if(mascote >=1){
        valMascote =500
    }else{
        valMascote = 0
    }

    if(quiz >=1){
        valQuiz =1000
    }else{
        valQuiz=0
    }

    if(ex >=1){
        valEx=1000
    }else{
        valEx = 0
    }

    if(foto >=1){
        valFoto = 500
    }else{
        valFoto = 0
    }

    if(video >=1){
        valVideo = 500
    }else{
        valVideo = 0
    }

    let resultado = valKit + valCarac + valSangue + valMusic + valMascote + valQuiz + valEx + valFoto + valVideo
    window.document.getElementById("resp-rx").innerHTML = resultado
    
}
function calcVd(){
    let kit = Number(document.getElementById("kit").value)
    let carac = Number(document.getElementById("carac").value)
    let sangue = Number(document.getElementById("sangue").value)
    let music = Number(document.getElementById("music").value)
    let mascote = Number(document.getElementById("mascote").value)
    let quiz = Number(document.getElementById("quiz").value)
    let ex = Number(document.getElementById("ex").value)
    let foto = Number(document.getElementById("visita1").value)
    let video = Number(document.getElementById("visita2").value)
    let valKit
    let valCarac
    let valSangue
    let valMusic
    let valMascote
    let valQuiz
    let valEx
    let valFoto
    let valVideo
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

    if(carac >= 1){
        valCarac = 100
    }else{
        valCarac = 0
    }

    if(sangue >=1){
        valSangue = 20
    }else{
        valSangue = 0
    }

    if(music >=1){
        valMusic = 1500
    }else{
        valMusic = 0
    }

    if(mascote >=1){
        valMascote =500
    }else{
        valMascote = 0
    }

    if(quiz >=1){
        valQuiz =1000
    }else{
        valQuiz=0
    }

    if(ex >=1){
        valEx=1000
    }else{
        valEx = 0
    }

    if(foto >=1){
        valFoto = 500
    }else{
        valFoto = 0
    }

    if(video >=1){
        valVideo = 500
    }else{
        valVideo = 0
    }

    let resultado = valKit + valCarac + valSangue + valMusic + valMascote + valQuiz + valEx + valFoto + valVideo
    window.document.getElementById("resp-vd").innerHTML = resultado
    
}
function calcVm(){
    let kit = Number(document.getElementById("kit").value)
    let carac = Number(document.getElementById("carac").value)
    let sangue = Number(document.getElementById("sangue").value)
    let music = Number(document.getElementById("music").value)
    let mascote = Number(document.getElementById("mascote").value)
    let quiz = Number(document.getElementById("quiz").value)
    let ex = Number(document.getElementById("ex").value)
    let foto = Number(document.getElementById("visita1").value)
    let video = Number(document.getElementById("visita2").value)
    let valKit
    let valCarac
    let valSangue
    let valMusic
    let valMascote
    let valQuiz
    let valEx
    let valFoto
    let valVideo
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

    if(carac >= 1){
        valCarac = 100
    }else{
        valCarac = 0
    }

    if(sangue >=1){
        valSangue = 20
    }else{
        valSangue = 0
    }

    if(music >=1){
        valMusic = 1500
    }else{
        valMusic = 0
    }

    if(mascote >=1){
        valMascote =500
    }else{
        valMascote = 0
    }

    if(quiz >=1){
        valQuiz =1000
    }else{
        valQuiz=0
    }

    if(ex >=1){
        valEx=1000
    }else{
        valEx = 0
    }

    if(foto >=1){
        valFoto = 500
    }else{
        valFoto = 0
    }

    if(video >=1){
        valVideo = 500
    }else{
        valVideo = 0
    }

    let resultado = valKit + valCarac + valSangue + valMusic + valMascote + valQuiz + valEx + valFoto + valVideo
    window.document.getElementById("resp-vm").innerHTML = resultado
    
}
