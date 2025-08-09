import React, { useState } from 'react';

function File() {
    const [file, setFile] = useState(null);
    const [typeFileErr, setTypeFileErr] = useState('');
    const [fileAccepted, setFileAccepted] = useState('');

    function handleFile(e) {
        let profileFile = e.target.files[0];
        setFile(profileFile);
        // Clear messages when new file selected
        setTypeFileErr('');
        setFileAccepted('');
    }

    function uploadFile() {
        if (!file) {
            setTypeFileErr('Please upload a file');
            setFileAccepted('');
            return;
        }

        let fileSize = file.size;
        let fileName = file.name;
        let fileArray = fileName.split('.');
        let extension = fileArray.length > 1 ? fileArray.pop().toLowerCase() : '';

        if (extension === "zip" && fileSize <= 2 * 1024 * 1024) {
            setFileAccepted(`${extension} file Accepted`);
            setTypeFileErr('');
        } 
        else if (extension === "zip" && fileSize > 2 * 1024 * 1024) {
            setTypeFileErr(`${extension} must be 2MB or less`);
            setFileAccepted('');
        }
        else if (extension === "png") {
            setFileAccepted(`${extension} file Accepted`);
            setTypeFileErr('');
        }
        else if (extension === "") {
            setTypeFileErr(`Please upload file`);
            setFileAccepted('');
        }
        else {
            setTypeFileErr(`${extension} file Not Accepted, please upload zip file`);
            setFileAccepted('');
        }
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 justify-content-center text-center">
                    <h1>File</h1>
                    <h2>This is file page</h2>
                </div>
                <div className="col-6 mt-5 justify-content-center text-center">
                    <input type="file" className="form-control" onChange={handleFile} />
                    <button onClick={uploadFile} className='btn btn-warning mt-3 shadow-sm'>Submit</button>

                    <div>
                        <p className="text-danger">{typeFileErr}</p>
                        <p className="text-success">{fileAccepted}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default File;
