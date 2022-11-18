import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MyEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      console.log(editorState)
  return (
    <Editor editorState={editorState}  
      onEditorStateChange={setEditorState}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      />
  )
}



export default MyEditor