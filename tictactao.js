let gameContainer = document.getElementsByClassName("gameContainer"),
    cellContainer = document.getElementById("cellContainer"),
    statusText = document.getElementById("statusText"),
    restartBtn = document.getElementById("restartBtn")
const cells = document.querySelectorAll(".cell")
statusText.innerHTML = `X's Turn دور X`
let x = []
let o = []
let winnerCamp = [
    ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
    ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
    ['2', '4', '6'], ['0', '4', '8']
]
function winner() {

    winnerCamp.forEach((itme, indx, array) => {
        if (JSON.stringify(o.sort()) === JSON.stringify(itme.sort())) {
            statusText.textContent = ` The winner is O 
            الفائز هو O`
        }
        if (JSON.stringify(x.sort()) === JSON.stringify(itme.sort())) {
            statusText.textContent = ` The winner is X 
            الفائز هو X`

        }
    })

}
cellContainer.onclick = function (e) {
    playerX(e)
    playerO(e)
    winner()
    // console.log(e.target.getAttribute("cellIndex"))
    // statusText.getAttribute


}
function playerX(e) {
    if (e.target.textContent == "" && statusText.textContent == `X's Turn دور X`) {
        e.target.textContent = "X"
        statusText.textContent = "O's Turn دور O"
        x.push(e.target.getAttribute("cellIndex"))

    }
    console.log(x)
}
function playerO(e) {
    if (e.target.textContent == "" && statusText.textContent == "O's Turn دور O") {
        e.target.textContent = "O"
        statusText.innerHTML = `X's Turn دور X`
        o.push(e.target.getAttribute("cellIndex"))
    }
    console.log(o)
}

restartBtn.onclick = function () {
    cells.forEach(function (c) {
        c.textContent = ""
    });
    x = []
    o = []
    statusText.textContent = `X's Turn دور X`
}