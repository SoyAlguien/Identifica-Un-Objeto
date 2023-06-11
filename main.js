var reconocimiento=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gFhlmnGFX/model.json",modelo_listo)
function modelo_listo(){
    console.log("Ya estoy listo")
}
Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:100
})
Webcam.attach("#Camara")
function tomar_foto(){
    Webcam.snap(function(uri){
    document.getElementById("captura").innerHTML='<img src="'+uri+'" id="foto">'        
    })
}
function reconocer_objeto(){
    foto=document.getElementById("foto")
    reconocimiento.classify(foto,mostrar_resultados)
}
function mostrar_resultados(error,resultados){
    if (!error) {
        console.log(resultados)
        objeto=resultados[0].label
        porcentaje=resultados[0].confidence
        porcentaje=Math.round(porcentaje*100)+"%"
        document.getElementById("Objeto").innerHTML="Objeto: "+ objeto
        document.getElementById("Precisión").innerHTML="Precisión: "+ porcentaje
    }
}