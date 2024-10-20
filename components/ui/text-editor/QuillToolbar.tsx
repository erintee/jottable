// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
  }
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "script",
  "list",
  "image",
  "indent",
  "link",
  "color",
  "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
      <span className="ql-formats">
        <button className="ql-bold" tabIndex={-1} />
        <button className="ql-italic" tabIndex={-1}/>
        <button className="ql-underline" tabIndex={-1}/>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" tabIndex={-1}/>
        <button className="ql-list" value="bullet" tabIndex={-1}/>
        <button className="ql-list" value="check" tabIndex={-1}/>
      </span>
      <span className="ql-formats">
        <button className="ql-link" tabIndex={-1}/>
        <button className="ql-clean" tabIndex={-1}/>
      </span>
    </div>
);

export default QuillToolbar;