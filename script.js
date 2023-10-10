


const resulst = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNunmer = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine)

}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        resulst.innerHTML = "deu empate"

    } else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScoreNunmer++
        humanScore.innerHTML = humanScoreNunmer

        resulst.innerHTML = "você ganhou!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        resulst.innerHTML = "você perdu para a Alexa"
    }

}





































