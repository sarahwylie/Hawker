import React from 'react';

function UploadForm() {

  const handleFileChange = async (e) => {
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
      <h1 className='title'>Upload File</h1>

      <input type="file" onChange={handleFileChange} value='' className='btn-primary' />

    </div>
  );
}

export default UploadForm;
