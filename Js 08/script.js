
function first(){
    setTimeout(function (){
        console.log(500)
    }, 5000)
}
function second(){
    console.log(2)
}



function learnJs(lang, call) {
    console.log(lang)
    call()
}


learnJs("hello", first)