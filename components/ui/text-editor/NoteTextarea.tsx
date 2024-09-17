import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "@/components/ui/text-editor/EditorToolbar"

const NoteTextarea = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <EditorToolbar/>
            <ReactQuill 
                theme="snow" 
                className="mb-8" 
                value={value} 
                onChange={() => setValue(value)}
                modules={modules}
                formats={formats} 
            />
        </div>
    )
}

export default NoteTextarea