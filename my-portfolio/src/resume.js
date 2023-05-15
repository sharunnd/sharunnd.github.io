


export const handleResume = () =>{
    fetch("Sharun-ND-Resume.pdf").then((res)=>{
      res.blob().then((blob)=>{
        const fileUrl = window.URL.createObjectURL(blob)
        const file = document.createElement("a")
        file.href = fileUrl;
        file.download = "Sharun-ND-Resume.pdf";
        file.click()
        window.open("Sharun-ND-Resume.pdf","_blank")
      })
    })
  }