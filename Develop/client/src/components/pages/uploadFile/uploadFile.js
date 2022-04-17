import React from 'react';

function UploadForm() {

  const handleFileChange = async (e) => {
      console.log(e.target.files[0])
      let file = e.target.files[0];
      var formData = new FormData();

      formData.append("file", file);
      formData.append("cloud_name","dkmsnpghg")
      formData.append("upload_preset", "fjzsl5iq");

      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dkmsnpghg/image/upload",
        {
          method: "post",
          mode: "cors",
          body: formData
        }
      );

      let json = await res.json();
    console.log(JSON.stringify(json.secure_url));
    localStorage.setItem('imageurl', `${JSON.stringify(json.secure_url)}`)
  
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} value='' />
      <button style={{width: '5rem', height: '2rem'}} className="btn-primary"  type="submit" onClick={handleFileChange}>submit file</button>
    </div>
  );
}

export default UploadForm;
