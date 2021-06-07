function add(){
    var a=prompt("Enter The Value Of A")
    var b=prompt("Enter The Value Of B")
    var sum=parseInt(a)+parseInt(b);
    /*var text=document.createTextNode(sum);
    var h2=document.createElement("h2")
    h2.appendChild(text)
  */
 document.write("sum="+sum)  
}
function sub(){
    var a=prompt("Enter The Value Of A")
    var b=prompt("Enter The Value Of B")
    var diff=parseInt(a)-parseInt(b)
    document.write("diff="+diff)
}