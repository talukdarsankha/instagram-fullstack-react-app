


export const UploadToCloudinary = async (file)=>{
   if(file){
     const formData = new FormData();
       formData.append("file",file);
       formData.append("upload_preset","instagram-fullStack-React-Springboot2");
       formData.append("cloud_name","doa7jctor");

       const res = await fetch("https://api.cloudinary.com/v1_1/doa7jctor/image/upload",{
        method:"POST",
        body:formData
       })

       const data = await res.json();
       console.log("Cloudinary upload obj is: ");
       console.log(data);
       return data.url.toString();
   }
}


