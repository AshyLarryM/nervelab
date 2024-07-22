import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import { useEffect } from 'react';

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TiptapEditor = ({ value, onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-editor">
      <div className="flex space-x-2 mb-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded-md ${editor.isActive('bold') ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded-md ${editor.isActive('italic') ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded-md ${editor.isActive('underline') ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          U
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto bg-gray-700 text-gray-300 p-2 rounded-md  focus:ring-purple-500"
        style={{ height: '250px', overflowY: 'auto' }}
      />
    </div>
  );
};

export default TiptapEditor;
