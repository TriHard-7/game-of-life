import React, { useState, useEffect } from 'react';
import { Meme } from "./components/Meme.js"

const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
  return '?'
}
export const App = () => {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes${objectToQueryParam(params)}`);
    const data = response.json();
    console.log(data);
    return (<div style={{ textAlign: "center" }}>
      {template && (
        <form onSubmit={async e => {
          e.preventDefault();
          //add logic 
          const response = await fetch('https://api.imgflip.com/caption_image')

        }}>
          <Meme template={template} />
          <input placeholder="top text" value={topText} onChange={e => setTopText(e.target.value)} />
          <input placeholder="bottom text" value={bottomText} onChange={e => setBottomText(e.target.value)} />
          <button type="submit" > create Meme</button>
        </form>)}
      { !template &&
        templates.map(template => {
          return (
            <Meme
              template={template}
              onClick={() => {
                setTemplate(template);
              }} />
          );
        })
      }</div>
    )



  }
  )
}
export default App;
