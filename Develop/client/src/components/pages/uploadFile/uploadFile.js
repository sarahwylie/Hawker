import React, { useState } from 'react';

function UploadForm() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    var formData = new FormData();
    previewFile(file);
    setFileInputState(e.target.value);
    formData.append('file', file);
    formData.append('cloud_name', 'dkmsnpghg');
    formData.append('upload_preset', 'fjzsl5iq');

    let res = await fetch('https://api.cloudinary.com/v1_1/dkmsnpghg/image/upload', {
      method: 'post',
      mode: 'cors',
      body: formData
    });

    let json = await res.json();
    localStorage.setItem('imageurl', `${JSON.stringify(json.secure_url)}`);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div>
      <h1 className="title">Upload File</h1>
      <div>
        <input type="file" onChange={handleFileChange} value={fileInputState} />
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ width: '100px', height: '100px' }} />
        )}
      </div>
    </div>
  );
}

export default UploadForm;
