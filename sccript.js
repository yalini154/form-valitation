function validateform() {
    var x = document.forms["myform"] ["fname"].value;
    if(x == ""){
        alert("please fill this fild");
        return false;
    }
}