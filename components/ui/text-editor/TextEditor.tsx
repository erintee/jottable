"use client";

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillToolbar.css';
import QuillToolbar, { modules, formats } from "@/components/ui/text-editor/QuillToolbar"

interface TextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {

    return (
        <div>
            <QuillToolbar/>
            <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={onChange}
                modules={modules}
                formats={formats}
                className='h-36'
            />
            {/* </ReactQuill> */}
        </div>
    )
}

export default TextEditor