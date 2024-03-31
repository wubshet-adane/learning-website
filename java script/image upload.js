const image_input=document.getElementById("image_input");
var uploaded_image="";
image_input.addEventListener("change",function(){
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        document.getElementById("image-area").style.backgroundImage="url(${uploaded_image})";

    })
    reader.readAsDataURL(this.file[0]);
})  