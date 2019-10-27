function input(a) {
    document.querySelector(".display").value += a ;
}
function del() {
    document.querySelector(".display").value = " " ;
}
function eq() {
    document.querySelector(".display").value = eval(document.querySelector(".display").value) ;
}