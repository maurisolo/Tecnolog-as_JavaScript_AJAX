function palindromo(){
    const palabra = document.getElementById("palabra").value;
    const nueva_p = palabra.replace(/[\W_]/g, "").toLowerCase();
    const reversa = nueva_p.split("").reverse().join("");

    let respuesta = ""
    if (nueva_p === reversa)
        respuesta = "¡Es un palindromo!"
    else 
        respuesta = "¡No es un palindromo!"
    
    document.getElementById("respuesta").innerHTML=respuesta;
}

function num_mayor(){
    const num_1 = document.getElementById("num_1").value;
    const num_2 = document.getElementById("num_2").value;

    let respuesta = ""
    if (num_1>num_2)
        respuesta = "El numero mayor es " + num_1
    else
        respuesta = "El numero mayor es " + num_2

    document.getElementById("respuesta").innerHTML=respuesta;
}

function iden_vocales(){
    const palabra = document.getElementById("palabra").value;
    const nueva_p = palabra.replace(/[\W_]/g, "").toLowerCase();
    const lista = nueva_p.split("");
    
    let respuesta = ""
    let lista_1=[];
    for (j = 0; j < lista.length; j++){
        if (lista[j]=="a"){
            lista_1.push("a");}
        else if (lista[j]=="e"){
            lista_1.push("e")}
        else if (lista[j]=="i"){
            lista_1.push("i")}
        else if (lista[j]=="o"){
            lista_1.push("o")}
        else if (lista[j]=="u"){
            lista_1.push("u")}
    }
    respuesta="Vocales encontradas: " + lista_1
    document.getElementById("respuesta").innerHTML=respuesta;
}

function cont_vacales(){
    const palabra = document.getElementById("palabra").value;
    const nueva_p = palabra.replace(/[\W_]/g, "").toLowerCase();
    const lista = nueva_p.split("");

    let respuesta = ""
    let a=0
    let e=0
    let i=0
    let o=0
    let u=0
    for (j = 0; j < lista.length; j++){
        if (lista[j]=="a"){
            a=a+1}
        else if (lista[j]=="e"){
            e=e+1}
        else if (lista[j]=="i"){
            i=i+1}
        else if (lista[j]=="o"){
            o=o+1}
        else if (lista[j]=="u"){
            u=u+1}
    }
    respuesta="Cantidad de Vocales: a= " + a + " / e= " + e + " / i= " + i + " / o= " + o + " / u= " + u

    document.getElementById("respuesta").innerHTML=respuesta;
}