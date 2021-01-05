var fileReader = new FileReader();
var filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
var image=null;
var canvas=null;
fileReader.onload = function (event) {
    console.log(event)
   image = new Image();
  image.onload=function(){
      document.getElementById("original-Img").src=image.src;
       canvas=document.createElement("canvas");
      var context=canvas.getContext("2d");
      canvas.width=width();

    canvas.height=height();
      context.drawImage(image,
          0,
          0,
          image.width,
          image.height,
          0,
          0,
          canvas.width,
          canvas.height
      );
      document.getElementById("upload-Preview").src = canvas.toDataURL();
  }
  image.src=event.target.result;
};
function width(){
  return 384
    if(image.width < 600){
        return image.width;
    }
    if(image.width/4 >500){
        console.log(image.width/4);
        return image.width/4;
    }
    if(image.width/4 > 800){
        return 800;
    }
    else{
        return 500;
    }
}
function height(){
  return 384
    ratio=image.height/image.width;
    console.log(ratio);
    console.log(canvas.width)
    return canvas.width*ratio;
}
var loadImageFile = function () {
  var uploadImage = document.getElementById("upload-Image");
  if (uploadImage.files.length === 0) { 
    return; 
  }
  
  //Is Used for validate a valid file.
  var uploadFile = document.getElementById("upload-Image").files[0];
  if (!filterType.test(uploadFile.type)) {
    alert("Please select a valid image."); 
    return;
  }
  
  fileReader.readAsDataURL(uploadFile);
}