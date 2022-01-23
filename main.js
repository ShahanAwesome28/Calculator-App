function add(){
    var ans= Number(document.getElementById("first_input").value)+Number(document.getElementById("second_input").value)
    document.getElementById("answer").value=ans
}
function sub(){
    var sub= Number(document.getElementById("first_input").value)-Number(document.getElementById("second_input").value)
    document.getElementById("answer").value=sub
}
function mul(){
    var mul= Number(document.getElementById("first_input").value)*Number(document.getElementById("second_input").value)
    document.getElementById("answer").value=mul
}
function div(){
    var div= Number(document.getElementById("first_input").value)/Number(document.getElementById("second_input").value)
    document.getElementById("answer").value=div
}
