
    function data(){
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    var d=document.getElementById("n4").value;
    
    if (a==""||b==""||c==""||d=="") {
        alert("All field are mandatory");
        return false;
    }else if (b.length<10||b.length>10) {
        alert("number should be of 10 digit !Please inter valid number");
        return false;
    }
    else if (isNaN(b)) {
        alert("Only number are allowed !Please inter valid number");
        return false;
    }
    else if (c!=d) {
        alert("please enter same password");
        return false;
    }
    else{
        true;
    }
}
  