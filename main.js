Webcam.set({
    width:300,
    height:300,
    image_format:'jpg',
    jpg_quality:90,
    constraints:{
        facingMode:'environment'
    }
})

Webcam.attach("camera")
function capture() {
    Webcam.snap(
     function(img){
         document.getElementById("snapshot").innerHTML=`<img src=${img} id="capture_image">`
     } 
    )
    }

console.log(ml5.version)
classifier=ml5.imageClassifier("MobileNet",modelloaded)
function modelloaded() {
 console.log("model has been loaded")   
}

function identify() {
 image=document.getElementById("capture_image")
 classifier.classify(image,getresults)
}
function getresults(error,result) {
    if (error) {
      console.log(error)  
    } else {
        console.log(result) 
        document.getElementById("object_name").innerHTML=result[0].label
    }
}