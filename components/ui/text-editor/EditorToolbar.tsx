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
  "bullet",
  "check",
  "indent",
  "link",
  "color",
  "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-list" value="check" />
    </span>
    <span className="ql-formats">
      <select className="ql-color" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
    </span>
    <span className="ql-formats">
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
  </div>
);

export default QuillToolbar;