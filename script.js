function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IouQjBE01/', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
  }
  
function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("nomeDoAnimalTocado").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        
        let img = document.getElementById('theImage'); 

        if (results[0].label == "cachorro") {
            img.src = 'cachorro-com-fundo-transparente.png';;
          } else if (results[0].label == "leão") {
            img.src = 'Foto-Lion-Leão-PNG.png';
          } else if (results[0].label == "vaca") {
            img.src = 'Vaca-PNG.png';
          }else{
            img.src = 'Gato-PNG.png';
          }
        
}
}