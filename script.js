const buttons = document.querySelectorAll(".buttons")
const ladiv = document.querySelector(".ladiv")

function pileouface(){

    for (i = 0 ; i < buttons.length; i++) {
        let joueur = buttons[i].textContent  
        let ordi = buttons[Math.floor(Math.random() * buttons.length)].textContent    
        if (joueur === ordi) {
            ladiv.innerHTML = "Vous gagnez"
        }
        else {
            ladiv.innerHTML = "vous perdez"
        }
    }
    
}
