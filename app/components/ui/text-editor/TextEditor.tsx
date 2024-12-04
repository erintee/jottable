"use client";

import React from 'react'
import 'react-quill/dist/quill.snow.css';
import './QuillToolbar.css';
import QuillToolbar, { modules, formats } from "@/app/components/ui/text-editor/QuillToolbar"

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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