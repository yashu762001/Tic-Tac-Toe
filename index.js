
var obj
var e; var f;  
var a; var b;
function func1(number) {

   var temp =  document.getElementById('c'+number)

   if(temp.innerText=="") {
    temp.innerText = obj
    temp.style.textAlign = 'center'
    temp.style.fontSize = '50px'
 
    func2() 
    win()
   }
}


function shortcut() {
    if(event.keyCode=='97') {
        func1(1)
    }

    else if(event.keyCode=='98') {
        func1(2)
    }

    else if(event.keyCode=='99') {
        func1(3)
    }

    else if(event.keyCode=='100') {
        func1(4)
    }

    else if(event.keyCode=='101') {
        func1(5)
    }

    else if(event.keyCode=='102') {
        func1(6)
    }

    else if(event.keyCode=='103') {
        func1(7)
    }

    else if(event.keyCode=='104') {
        func1(8)
    }

    else if(event.keyCode=='105') {
        func1(9)
    }
}

function color() {
    event.target.style.backgroundColor = 'blue'
}

function remove() {
    event.target.style.backgroundColor = 'aquamarine'
}

// This function set() is going to perform a toss in between two players and will set up the playing environment.
function set() {
    document.getElementById('p1').style.visibility = "visible"
    document.getElementById('p2').style.visibility = "visible"
     a = document.getElementById('p1').value
     b = document.getElementById('p2').value


    var x = Math.random() 
    var y = Math.random()
    var c; var d; 
    if(x>=y) {
        console.log(' x is greater than y')
        obj = "O"
        e=a
        f=b
         c = 'Player1' + ' : '+ a+ ' : ' + obj
         d = 'Player2' + ': '+ b+ ' : ' + 'X'
        document.getElementById('message').style.visibility = "visible"
    }

    else if(x<y) {
        console.log('x is smaller than y')
        obj = "X"
        e=b
        f=a
        c = 'Player1' + ' : '+ a+ ' : ' + obj
        d = 'Player2' + ': '+ b+ ' : ' + 'O'
        document.getElementById('message').style.visibility = "visible"
    }

    var list = [23,45,1,12,32,21,67]

    var u = list[Math.floor(Math.random()*7)]
    var w = list[Math.floor(Math.random()*7)]

    console.log(x,y,u,w)

    if(u>=w&&obj=='O') {
        obj = 'O'
        console.log(obj)
        document.getElementById('message').innerText = e+ ' won the toss and will play first' 
    }

    else if(u>=w&&obj=='X') {
        obj = 'O'
        console.log(obj)
        document.getElementById('message').innerText = e+' won the toss and will play first'
    }

    else if(u<w&&obj=='O') {
        obj = 'X'
        console.log(obj)
        document.getElementById('message').innerText = f+' won the toss and will play first'
    }

    else if(u<w&&obj=='X') {
        obj='X'
        console.log(obj)
        document.getElementById('message').innerText = f+' won the toss and will play first'
    }

    document.getElementById('p1').value = c
    document.getElementById('p1').style.color = "black"
    document.getElementById('p1').style.fontSize = "30px"
    document.getElementById('p1').style.width = "400px"
    document.getElementById('p1').style.fontWeight = "bold"
    document.getElementById('p2').value = d
    document.getElementById('p2').style.color = "black"
    document.getElementById('p2').style.fontSize = "30px"
    document.getElementById('p2').style.width = "400px"
    document.getElementById('p2').style.fontWeight = "bold"
    
    document.getElementById('p3').style.display = "none"

    document.getElementById('i1').style.visibility = "visible"

    for(var i=1; i<=9; i++) {
        document.getElementById('c'+i).addEventListener('mouseover',color)
        document.getElementById('c'+i).addEventListener('mouseout',remove)
    }

    document.addEventListener('keyup',shortcut)
}

function func2() {
    if(obj=='X') {
        obj = "O"
    }

    else if(obj = "O") {
        obj = "X"
    } 

    if(obj=='O') {
        document.getElementById('won').innerText = e+' Ki Turn Hai'
    }

    else if(obj=='X') {
        document.getElementById('won').innerText = f+' Ki Turn Hai'
    }
}

function restart() {
        document.getElementById('i1').style.visibility = "hidden"
        document.getElementById('c1').innerText = ""
        document.getElementById('c2').innerText = ""
        document.getElementById('c3').innerText = ""
        document.getElementById('c4').innerText = ""
        document.getElementById('c5').innerText = ""
        document.getElementById('c6').innerText = ""
        document.getElementById('c7').innerText = ""
        document.getElementById('c8').innerText = ""
        document.getElementById('c9').innerText = ""
        document.getElementById('result').style.visibility = "hidden"
        document.getElementById('btn').style.visibility = "hidden"
        document.getElementById('c1').style.backgroundColor = "aquamarine"
        document.getElementById('c2').style.backgroundColor = "aquamarine"
        document.getElementById('c3').style.backgroundColor = "aquamarine"
        document.getElementById('c4').style.backgroundColor = "aquamarine"
        document.getElementById('c5').style.backgroundColor = "aquamarine"
        document.getElementById('c6').style.backgroundColor = "aquamarine"
        document.getElementById('c7').style.backgroundColor = "aquamarine"
        document.getElementById('c8').style.backgroundColor = "aquamarine"
        document.getElementById('c9').style.backgroundColor = "aquamarine"
        document.getElementById('p1').style.visibility = "hidden"
        document.getElementById('p1').value = a
        document.getElementById('p2').value = b
        document.getElementById('p2').style.visibility = "hidden"
        document.getElementById('won').style.visibility = "hidden"
        document.getElementById('message').style.visibility = "hidden"
        set()
        
}

function win() {
    var a1 = document.getElementById("c1")
    var a2 = document.getElementById("c2")
    var a3 = document.getElementById("c3")
    var b1 = document.getElementById("c4")
    var b2 = document.getElementById("c5")
    var b3 = document.getElementById("c6")
    var d1 = document.getElementById("c7")
    var d2 = document.getElementById("c8")
    var d3 = document.getElementById("c9")

    //  X Wins

    if(a1.innerText=='X'&&a2.innerText=='X'&&a3.innerText=='X') {
        
        a1.style.backgroundColor = "Brown"
        a2.style.backgroundColor = "Brown"
        a3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText =  f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(b1.innerText=='X'&&b2.innerText=='X'&&b3.innerText=='X') {
       
        b1.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        b3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(d1.innerText=='X'&&d2.innerText=='X'&&d3.innerText=='X') {
        d1.style.backgroundColor = "Brown"
        d2.style.backgroundColor = "Brown"
        d3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a1.innerText=='X'&&b1.innerText=='X'&&d1.innerText=='X') {
        a1.style.backgroundColor = "Brown"
        b1.style.backgroundColor = "Brown"
        d1.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a2.innerText=="X"&&b2.innerText=="X"&d2.innerText=="X") {
        a2.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        d2.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a3.innerText=="X"&&b3.innerText=="X"&&d3.innerText=="X") {
        a3.style.backgroundColor = "Brown"
        b3.style.backgroundColor = "Brown"
        d3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a1.innerText=="X"&&b2.innerText=="X"&&d3.innerText=="X") {
        a1.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        d3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a3.innerText=="X"&&b2.innerText=="X"&&d1.innerText=="X") {
        a3.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        d1.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = f+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }


    //  O Wins

    if(a1.innerText=='O'&&a2.innerText=='O'&&a3.innerText=='O') {
        
        a1.style.backgroundColor = "Brown"
        a2.style.backgroundColor = "Brown"
        a3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(b1.innerText=='O'&&b2.innerText=='O'&&b3.innerText=='O') {
       
        b1.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        b3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(d1.innerText=='O'&&d2.innerText=='O'&&d3.innerText=='O') {
        d1.style.backgroundColor = "Brown"
        d2.style.backgroundColor = "Brown"
        d3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a1.innerText=='O'&&b1.innerText=='O'&&d1.innerText=='O') {
        a1.style.backgroundColor = "Brown"
        b1.style.backgroundColor = "Brown"
        d1.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a2.innerText=="O"&&b2.innerText=="O"&d2.innerText=="O") {
        a2.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        d2.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a3.innerText=="O"&&b3.innerText=="O"&&d3.innerText=="O") {
        a3.style.backgroundColor = "Brown"
        b3.style.backgroundColor = "Brown"
        d3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a1.innerText=="O"&&b2.innerText=="O"&&d3.innerText=="O") {
        a1.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        d3.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }

    if(a3.innerText=="O"&&b2.innerText=="O"&&d1.innerText=="O") {
        a3.style.backgroundColor = "Brown"
        b2.style.backgroundColor = "Brown"
        d1.style.backgroundColor = "Brown"
        document.getElementById('result').innerText = e+" Won"
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    }
    
    
    else if(a1.innerText!=""&&a2.innerText!=""&&a3.innerText!=""&&b1.innerText!=""&&b2.innerText!=""&&
    b3.innerText!=""&&d1.innerText!=""&&d2.innerText!=""&&d3.innerText!="") {
        for(var i=1; i<=9; i++) {
            document.getElementById('c'+i).style.backgroundColor = "Green" ; 
        } 

        document.getElementById('result').innerText = "Match tied between " + e + ' and ' + f
        document.getElementById('result').style.visibility = "visible"
        document.getElementById('btn').style.visibility = "visible"
    } 
}

