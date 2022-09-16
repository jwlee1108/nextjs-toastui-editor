import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';

export default function MarkdownEditor() {
  return (
    <Editor
      usageStatistics={false}
      placeholder={'placeholder'}
      initialValue={''}
      previewStyle='tab'
      height='18.75rem'
      initialEditType='markdown'
      autofocus={false}
    />
  );
}
