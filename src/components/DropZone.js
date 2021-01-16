import React, { useEffect, useState, useCallback } from 'react'

import { useDropzone } from 'react-dropzone';
import { useToasts } from 'react-toast-notifications'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


function DropZone(props) {
    const [files, setFiles] = useState([]);
    const { addToast } = useToasts()
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {           
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div className="m-auto" style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt="upload"
                />
            </div>
        </div>
    ));

    const getData = () => {
        if (files.length === 0) return addToast('No files Found , Please upload the image to process.', { appearance: 'error', autoDismiss: true })
        props.getImageDetails(files)
    }

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));

    }, [files]);

    return (
        <div>
            <section className="container mb-4">
                <div {...getRootProps({ className: 'dropzone w-50 m-auto' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>
            </section>
            <button
                type="button"
                className="btn btn-outline-primary btn-rounded"
                data-mdb-ripple-color="dark"
                onClick={() => getData()}
            >
                Get me some tags
        </button>
        </div>
    )
}

export default DropZone