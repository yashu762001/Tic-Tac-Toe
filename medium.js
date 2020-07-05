
var originalboard = [] // This will keep track of all the moves in the game.

var human;
var computer;

const wincomb = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const cells = document.querySelectorAll(".cell")
//  This cells array consists of all the squares of the 3x3 grid.


function restart() {
    document.getElementById('p2').style.visibility = 'visible'
    document.getElementById('p2').value = ''
    document.getElementById('btn1').style.visibility = 'visible'
    document.getElementById('result').style.visibility = 'hidden'
    document.getElementById('btn2').style.visibility = 'hidden'
    for(var i=0; i<cells.length; i++) {
        document.getElementById(i).innerText = ""
        document.getElementById(i).style.visibility = 'hidden'
        document.getElementById(i).style.backgroundColor = 'lightgoldenrodyellow'
    }
}

function shortcut() {
    if(event.keyCode=='97') {
        func1(0)
    }

    else if(event.keyCode=='98') {
        func1(1)
    }

    else if(event.keyCode=='99') {
        func1(2)
    }

    else if(event.keyCode=='100') {
        func1(3)
    }

    else if(event.keyCode=='101') {
        func1(4)
    }

    else if(event.keyCode=='102') {
        func1(5)
    }

    else if(event.keyCode=='103') {
        func1(6)
    }

    else if(event.keyCode=='104') {
        func1(7)
    }

    else if(event.keyCode=='105') {
        func1(8)
    }
}

function startgame() {
    human = document.getElementById('p2').value
    if(human=='X') {
        computer='O'
    }

    else if(human=='O') {
        computer = 'X'
    }

    else if(human=='') {
        document.write("Don't leave places Empty")
    }
    document.getElementById('p1').style.visibility='hidden'
    document.getElementById('p2').style.visibility = 'hidden'
    document.getElementById('btn1').style.visibility = 'hidden'
    
    for(var i=0; i<cells.length; i++) {
        document.getElementById(i).style.visibility = 'visible'
        document.getElementById(i).style.display = "inline-block"
        originalboard[i] = i
        // cells[i].addEventListener('click', func1)
        cells[i].addEventListener('mouseover',color)
        cells[i].addEventListener('mouseout',color1)
    }

    document.addEventListener('keyup',shortcut)

    var z = document.getElementById('p2').value
    var y = document.getElementById('p1').value

    document.getElementById('about1').innerText = y + ' : ' + z
    if(z=='X') {
        document.getElementById('about2').innerText = 'Computer' + ' : ' + 'O'
    }

    else if(z=='O') {
        document.getElementById('about2').innerText = 'Computer' + ' : ' + 'X'
    }
}

function color() {
    event.target.style.backgroundColor = 'blue'
}

function color1() {
    event.target.style.backgroundColor = 'lightgoldenrodyellow'
}


function func1(num) {
    var bool= true
    // console.log(event.target.id)
    if(typeof(originalboard[num])=='number') {
        func2(num, human)
        
        let gamewon = checkwin(originalboard, human)   

        if(gamewon) {
            bool = false
        }
        
        if(!checkTie()&&bool==true) {
            func2(bestPosition(), computer)
        }
    }
    
    // Kyunki click toh Computer bhi kar sa kta hai isliye yeh function sirf tabhi call hoga jab human square
    // par click karega.
}

function func2(id, player) {
    originalboard[id] = player
    document.getElementById(id).innerText = player
    document.getElementById(id).style.fontSize = "70px"
    document.getElementById(id).style.textAlign = "center"

    let gamewon = checkwin(originalboard, player)

    if(checkTie()) {
        for(var i=0; i<cells.length; i++) {
            document.getElementById(i).backgroundColor = "green"
            cells[i].removeEventListener('click',func1)
        }

        document.getElementById('result').style.visibility = 'visible'
    document.getElementById('result').innerText = 'Match Tied'
    document.getElementById('btn2').style.visibility = 'visible'

    }

    else if(gamewon) {
        gameover(gamewon)
    }

}

function checkwin(board, player) {
    plays = []
    for(var i=0; i<originalboard.length; i++) {
        if(originalboard[i]==player) {
            plays.push(i)
        }
    }
    // plays woh array hai jisme saari un locations ka address hai jo ki human player ne click ki hai.
    // console.log(plays)

    let gamewon = null

    for([index,win] of wincomb.entries()) {
        if(win.every(function(number) {
            if(plays.indexOf(number)>=0) {
                return true
            }

        })) {
            gamewon = {'index': index, 'player': player}
            // console.log(gamewon['index'])
            break
            
        }
    }

    return gamewon
}

function gameover(gamewon) {
    
    var temp = document.getElementById('p1').value

    var t = gamewon['index']
    var list = wincomb[t]

    for(var i=0; i<list.length; i++) {
        document.getElementById(list[i]).style.backgroundColor = "tomato"
    }

    document.getElementById('result').style.visibility = 'visible'
    if(gamewon['player']==computer) {
        document.getElementById('result').innerText = 'Computer' + ' Won '
    }

    else if(gamewon['player']==human) {
        document.getElementById('result').innerText = temp + ' Won '
    }
    document.getElementById('btn2').style.visibility = 'visible'

    for(var i=0; i<cells.length; i++) {
        cells[i].removeEventListener('click', func1)
    }
}

function emptysquares() {
    let arr = []

    for(var i=0; i<cells.length; i++) {
        if(originalboard[i]!="X" && originalboard[i]!="O") {
              arr.push(i)  
        }
    }

    // console.log(arr)

    return arr
}

function bestPosition() {
    var list = emptysquares()
    return list[Math.floor(Math.random()*list.length)]
}

function checkTie() {
    var k = emptysquares()
    if(k.length==0) {
        return true
    }

    else {
        return false
    }
}








