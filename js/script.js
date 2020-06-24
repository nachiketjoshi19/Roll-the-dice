const style1 = "assets/"
const style2 = "assets/c"

var getStyle = "assets/"

function setStyle() {

    if (getStyle == style1) {
        getStyle = style2
    } else if (getStyle == style2) {
        getStyle = style1
    }
}

function roll() {

    a = Math.ceil(Math.random() * 6)
    b = Math.ceil(Math.random() * 6)

    document.getElementById('player1').setAttribute("src", getStyle + a + ".png")
    document.getElementById('player2').setAttribute("src", getStyle + b + ".png")

    if (a > b) {
        document.getElementById('winner').innerHTML = "player 1 won"
    } else if (a === b) {
        document.getElementById('winner').innerHTML = "match draw"
    } else if (a < b) {
        document.getElementById('winner').innerHTML = "player 2 won"
    }
}

function change() {
    if (getStyle == style1) {
        document.getElementById('player1').setAttribute("src", "assets/c1.png")
        document.getElementById('player2').setAttribute("src", "assets/c6.png")
        setStyle()
    } else if (getStyle == style2) {
        document.getElementById('player1').setAttribute("src", "assets/1.png")
        document.getElementById('player2').setAttribute("src", "assets/6.png")
        setStyle()
    }

}