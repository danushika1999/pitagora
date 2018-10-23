
function inversa(){
var c1 = document.forms.pitagora.c1.value;
var c2 = document.forms.pitagora.c2.value;
var q1=c1*c1;
var q2=Math.pow(c2,2);
var somma=q1+q2;
var ipotenusa=Math.sqrt(somma);
document.getElementById('risultato').innerHTML="L'ipotenusa misura = "+ipotenusa+"cm";
}
function cancella(){ 
var calcolo = document.getElementById('risultato').innerHTML=" ";
}
