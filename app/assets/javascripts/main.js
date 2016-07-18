

function convert() {
    //document.getElementById("r1").value = document.getElementById("s1").value ; //fahrenheit //
    var a = document.getElementById("s1").value
    var b = document.getElementById("s2").value
    var v1 = parseInt(document.getElementById("r1").value)
    if(a =='celsius' && b == 'fahrenheit'){
       document.getElementById("r2").value = ((v1 * 9)/5) + 32;
    }
    
}

function convert_left(){
}

function convert_right(){
}
