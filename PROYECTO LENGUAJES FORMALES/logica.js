
function validar_union(letras1,letras2){

    let letras=Array();
    for(var j=0;j<letras1.length;j++){
        letras.push(letras1[j]);
    }
    
    for(var j=0;j<letras2.length;j++){
        letras.push(letras2[j]);
    }
   
    for(var i=0;i<letras.length;i++){
        for(var j=i+1;j<letras.length;j++){
            if(letras[i]==letras[j]){
                letras.splice(j, 1);
            }
        
        }
    }

    return letras

}

function click_operaciones_alfabeto() {
    
    var alfabeto1 = document.getElementById('alfabeto_1').value;
    var alfabeto2 = document.getElementById('alfabeto_2').value;


    let letras1=Array();
    let letras2=Array();

    for(var i=0; i<alfabeto1.length; i++) {
        letras1.push(alfabeto1[i]);
    }
    for(var i=0;i<letras1.length;i++){
        for(var j=i+1;j<letras1.length;j++){
            if(letras1[i]==letras1[j]){
                letras1.splice(j, 1);
            }
        }
    }
    
    for(var i=0; i<alfabeto2.length; i++) {
        letras2.push(alfabeto2[i]);
    }
    for(var i=0;i<letras2.length;i++){
        for(var j=i+1;j<letras2.length;j++){
            if(letras2[i]==letras2[j]){
                letras2.splice(j, 1);
            }
        }
    }
    
    document.getElementById('union_alfabeto').value = validar_union(letras1,letras2);
    document.getElementById('interseccion_alfabeto').value = validar_interseccion(letras1,letras2);
    document.getElementById('diferencia_alfabeto').value = validar_diferencia(letras1,letras2);
}

function validar_interseccion(letras1,letras2){
    
    
    let letras=Array();
    for(var i=0; i<letras1.length; i++) {
        for(var j=0; j<letras2.length; j++) {
            if(letras1[i]==letras2[j]){
                letras.push(letras1[i]);
            }
        }
    }
    return letras;
}

function validar_diferencia(letras1,letras2){
    
    for(var i=0; i<letras1.length; i++) {
        for(var j=0; j<letras2.length; j++) {
            if(letras1[i]==letras2[j]){
                
                letras1.splice(i,1);
                letras2.splice(j,1);
                i=0;
                j=0;
            }
        }
    }
    if(letras1[0]==letras2[0]){
                
        letras1.splice(0,1);
        letras2.splice(0,1);
    }
    
    
    return letras1;
    
}


function click_operaciones_lenguaje() {
    
    var alfabeto1 = document.getElementById('lenguaje_1').value;
    var alfabeto2 = document.getElementById('lenguaje_2').value;
    
    let arr_alfabeto1 = Array();
    
    var letras="";

    for(var i=0;i<alfabeto1.length;i++){
        if(alfabeto1[i]!=","){
            letras=letras+alfabeto1[i];


        }else{
            arr_alfabeto1.push(letras);
            letras=""
        }



    }
    arr_alfabeto1.push(letras);

    for(var i=0;i<arr_alfabeto1.length;i++){
        for(var j=i+1;j<arr_alfabeto1.length;j++){
            if(arr_alfabeto1[i]==arr_alfabeto1[j]){ 
                arr_alfabeto1.splice(j,1);
            }
        }
    }

    let arr_alfabeto2 = Array();
    letras=""
    for(var i=0;i<alfabeto2.length;i++){
        if(alfabeto2[i]!=","){
            letras=letras+alfabeto2[i];


        }else{
            arr_alfabeto2.push(letras);
            letras=""
        }



    }
   
    arr_alfabeto2.push(letras);
    
    for(var i=0;i<arr_alfabeto2.length;i++){
        for(var j=i+1;j<arr_alfabeto2.length;j++){
            if(arr_alfabeto2[i]==arr_alfabeto2[j]){ 
                arr_alfabeto2.splice(j,1);
            }
        }
    }
    
    document.getElementById('union_lenguaje').value = validar_union(arr_alfabeto1,arr_alfabeto2);
    document.getElementById('interseccion_lenguaje').value = validar_interseccion(arr_alfabeto1,arr_alfabeto2);
    document.getElementById('diferencia_lenguaje').value = validar_diferencia(arr_alfabeto1,arr_alfabeto2);
    document.getElementById('concatenacion_lenguaje').value = concatenar_lenguaje(arr_alfabeto1,arr_alfabeto2);
    
    
}

function concatenar_lenguaje(arr_alfabeto1,arr_alfabeto2){
    let arr_completo= Array();
    

    for(var i=0;i<arr_alfabeto1.length;i++){
        for(var j=0;j<arr_alfabeto2.length;j++){
            arr_completo.push(arr_alfabeto1[i]+arr_alfabeto2[j])
        }    
    }
   
    return arr_completo;
    
}

function hallar_cardinal_lenguaje(){
    let arr_lenguaje= Array();
    let arr_lenguaje_completo= Array();
    arr_lenguaje=document.getElementById('lenguaje_cardinal').value;
    if(arr_lenguaje==""){
        document.getElementById('cardinalidad_lenguaje').value = 0;
        return
    }
    var letras="";
    
    for(var i=0;i<arr_lenguaje.length;i++){
        if(arr_lenguaje[i]!=","){
            letras=letras+arr_lenguaje[i];


        }else{
            arr_lenguaje_completo.push(letras);
            letras=""
        }
    }
    arr_lenguaje_completo.push(letras);

    for(var i=0;i<arr_lenguaje_completo.length;i++){
        for(var j=i+1;j<arr_lenguaje_completo.length;j++){
            if(arr_lenguaje_completo[i]==arr_lenguaje_completo[j]){ 
                arr_lenguaje_completo.splice(j,1);
            }
        }
    }
   
    
    
    document.getElementById('cardinalidad_lenguaje').value = arr_lenguaje_completo.length;
}

function hallar_potencia_lenguaje(){
    let arr_lenguaje= Array();
    let arr_lenguaje_completo= Array();
    arr_lenguaje=document.getElementById('lenguaje_potencia').value;
    var exponente= document.getElementById('exponente').value;
    
    var letras="";
    
    for(var i=0;i<arr_lenguaje.length;i++){
        if(arr_lenguaje[i]!=","){
            letras=letras+arr_lenguaje[i];


        }else{
            arr_lenguaje_completo.push(letras);
            letras=""
        }
    }
    arr_lenguaje_completo.push(letras);

    for(var i=0;i<arr_lenguaje_completo.length;i++){
        for(var j=i+1;j<arr_lenguaje_completo.length;j++){
            if(arr_lenguaje_completo[i]==arr_lenguaje_completo[j]){ 
                arr_lenguaje_completo.splice(j,1);
            }
        }
    }
   
    let potencia = Array();
    for(var j=0;j<arr_lenguaje_completo.length;j++){
       potencia.push(arr_lenguaje_completo[j])
    }
    for(var k=0;k<exponente-1;k++){
        for(var i=0;i<arr_lenguaje_completo.length;i++){
            for(var j=0;j<arr_lenguaje_completo.length;j++){
                potencia.push(arr_lenguaje_completo[i]+arr_lenguaje_completo[j])
            }
        }    
    }
    
    document.getElementById('potencia_lenguaje').value = potencia;
}


function hallar_cardinal_lenguaje(){
    let arr_lenguaje= Array();
    let arr_lenguaje_completo= Array();
    arr_lenguaje=document.getElementById('lenguaje_cardinal').value;
    if(arr_lenguaje==""){
        document.getElementById('cardinalidad_lenguaje').value = 0;
        return
    }
    var letras="";
    
    for(var i=0;i<arr_lenguaje.length;i++){
        if(arr_lenguaje[i]!=","){
            letras=letras+arr_lenguaje[i];


        }else{
            arr_lenguaje_completo.push(letras);
            letras=""
        }
    }
    arr_lenguaje_completo.push(letras);

    for(var i=0;i<arr_lenguaje_completo.length;i++){
        for(var j=i+1;j<arr_lenguaje_completo.length;j++){
            if(arr_lenguaje_completo[i]==arr_lenguaje_completo[j]){ 
                arr_lenguaje_completo.splice(j,1);
            }
        }
    }
   
    
    
    document.getElementById('cardinalidad_lenguaje').value = arr_lenguaje_completo.length;
}

function hallar_inversa_lenguaje(){
    let arr_lenguaje= Array();
    let arr_lenguaje_completo= Array();
    arr_lenguaje=document.getElementById('lenguaje_inversa').value;
    
    var letras="";
    
    for(var i=0;i<arr_lenguaje.length;i++){
        if(arr_lenguaje[i]!=","){
            letras=letras+arr_lenguaje[i];


        }else{
            arr_lenguaje_completo.push(letras);
            letras=""
        }
    }
    arr_lenguaje_completo.push(letras);

    for(var i=0;i<arr_lenguaje_completo.length;i++){
        for(var j=i+1;j<arr_lenguaje_completo.length;j++){
            if(arr_lenguaje_completo[i]==arr_lenguaje_completo[j]){ 
                arr_lenguaje_completo.splice(j,1);
            }
        }
    }
   
    let arr_lenguaje_completo_inv = Array()
    var len=""
    for(var k=0;k<arr_lenguaje_completo.length;k++){
        var lenguaje=arr_lenguaje_completo[k];
        
        for(var i=lenguaje.length-1;i>=0;i--){
       
            len=len+lenguaje[i];
            
        }
        arr_lenguaje_completo_inv.push(len);
        len=""

    }
    
    document.getElementById('inversa_lenguaje').value = arr_lenguaje_completo_inv;
}


function hallar_cardinal_palabra(){
    let arr_lenguaje= Array();
    let arr_lenguaje_completo= Array();
    arr_lenguaje=document.getElementById('palabra').value;
    if(arr_lenguaje==""){
        document.getElementById('cardinalidad_palabra').value = 0;
        return
    }
    //var letras="";
    
    /*for(var i=0;i<arr_lenguaje.length;i++){
        if(arr_lenguaje[i]!=","){
            letras=letras+arr_lenguaje[i];


        }else{
            arr_lenguaje_completo.push(letras);
            letras=""
        }
    }
    arr_lenguaje_completo.push(letras);

    for(var i=0;i<arr_lenguaje_completo.length;i++){
        for(var j=i+1;j<arr_lenguaje_completo.length;j++){
            if(arr_lenguaje_completo[i]==arr_lenguaje_completo[j]){ 
                arr_lenguaje_completo.splice(j,1);
            }
        }
    }*/
   
    
    
    document.getElementById('cardinalidad_palabra').value = arr_lenguaje.length;
}

