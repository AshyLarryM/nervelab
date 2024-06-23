'use client'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TiptapEditor = ({ value, onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
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

  return <EditorContent editor={editor} className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto bg-white text-black p-2 rounded-md" />;
};

export default TiptapEditor;
