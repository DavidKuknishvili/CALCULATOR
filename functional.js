// init numbers
var seven = document.getElementById('seven')
var eigth = document.getElementById('eigth')
var nine = document.getElementById('nine')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var three = document.getElementById('three')
var two = document.getElementById('two')
var one = document.getElementById('one')
var zero = document.getElementById("zero")
var dot = document.getElementById("dot")

var result = document.getElementById("result");



function click(...more){
    // init operators
    var minus = document.getElementById("minus")
    var plus = document.getElementById("plus")
    var divide = document.getElementById("divide")
    var multiplay = document.getElementById("multiplay")
    var equals = document.getElementById("equals")
    var root = document.getElementById("root")
    var pow = document.getElementById("pow")
    var percentage = document.getElementById("percentage")

    //del
    var clear = document.getElementById("clear")


    var firstNumber = 0
    var secondNumber = 0
    var operator = ""

    more.map(a=>
        a.addEventListener('click', function(){

            if (result.innerHTML.length < 42){
                result.innerHTML = result.innerHTML + a.innerText
            }
            else{
                
            }

        })
    )

    plus.addEventListener('click', function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = ""
        operator = "+"
    })
    minus.addEventListener("click", function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = ""
        operator = "-"
    })
    divide.addEventListener("click", function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = ""
        operator = "/"
    })
    multiplay.addEventListener("click", function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = ""
        operator = "*"
    })
    root.addEventListener("click", function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = ""
        operator = "√"
    })
    percentage.addEventListener("click", function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = firstNumber / 100
        operator = "%"
    })
    pow.addEventListener("click", function(){
        firstNumber = parseFloat( result.innerHTML)
        result.innerHTML = ""
        operator = "a^n"
    })
    clear.addEventListener("click", function(){
        result.innerHTML = ""
    })


    equals.addEventListener('click', function(){
        secondNumber = parseFloat(result.innerHTML)
        if(operator == "+"){
            result.innerHTML = firstNumber + secondNumber
        }
        else if(operator == "-"){
            result.innerHTML = firstNumber - secondNumber
        }
        else if(operator == "*"){
            result.innerHTML = firstNumber * secondNumber
        }
        else if(operator == "/"){
            result.innerHTML = firstNumber / secondNumber
        }
        else if(operator == "√"){
            result.innerHTML = Math.pow(firstNumber, 1/secondNumber)
        }

        else if(operator == "a^n"){
            result.innerHTML = Math.pow(firstNumber, secondNumber)
        }
        else if(result.innerHTML == ""){
            result.innerHTML = ""
        } 
    })
}
click(seven,eigth,nine,four,five,six,three,two,one,zero,dot)