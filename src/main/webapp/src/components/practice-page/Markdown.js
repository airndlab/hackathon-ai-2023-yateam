import {useEffect, useState} from 'react';
import {Remarkable} from 'remarkable';

const remarkable = new Remarkable();

function Markdown({children}) {
  const [markdownAsHtml, setMarkdownAsHtml] = useState('');
  useEffect(() => {
    const html = remarkable.render(children);
    setMarkdownAsHtml(html)
  }, [children]);
  return (
    <div>
      <div className="markdown" dangerouslySetInnerHTML={{__html: markdownAsHtml}}/>
    </div>
  );
}

export default Markdown;
