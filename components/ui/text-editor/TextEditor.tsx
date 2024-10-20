import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillToolbar.css';
import QuillToolbar, { modules, formats } from "@/components/ui/text-editor/QuillToolbar"

const TextEditor = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <QuillToolbar/>
            <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={() => setValue(value)}
                modules={modules}
                formats={formats}
                className='h-36'
            />
            {/* </ReactQuill> */}
        </div>
    )
}

export default TextEditor