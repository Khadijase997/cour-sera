function upDate(previewPic) {
    // Vérifiez que l'événement se déclenche
    console.log("Mouseover event triggered");

    // Imprimez les informations sur previewPic
    console.log("Source: " + previewPic.src);
    console.log("Alt: " + previewPic.alt);

    // Modifiez le texte de l'élément avec l'identifiant 'image'
    document.getElementById('image').innerHTML = previewPic.alt;

    // Modifiez l'image d'arrière-plan de l'élément avec l'identifiant 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Remettez à jour l'URL de l'image d'arrière-plan de la div avec l'identifiant 'image'
    document.getElementById('image').style.backgroundImage = "url('')";

    // Mettez à jour le texte de la div avec l'identifiant 'image'
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}