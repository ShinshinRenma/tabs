import './App.css';
import Display from './components/Display';
import Tab from './components/Tab';
import { useState } from 'react';

const tabArray = {
  tabobjects: [
    {
      label: "Tab 1",
      content: "This is the content"
    },
    {
      label: "Tab 2",
      content: "Here's some more content"
    },
    {
      label: "Tab 3",
      content: "Here's even more content"
    }
  ]
}

function App() {

  const [tabs, setTabs]= useState(tabArray);
  const [content, setContent]= useState("This is the default content");

  const onClickHandler = (e) => {
    setContent(e.content);
  }

  return (
    <div className="App">
      <div className="tabs">
      {tabs.tabobjects.map((t, i) => ( 
        <h2 onClick={ (e) => onClickHandler(t) } key={i} className="tab">{t.label}</h2>
      ))}
      </div>
      <div className="tab-content">
      Display
      </div>
      {content}
    </div>
  );
}

// Change style for selected tab
// Add some CSS animations to the tab switching
// Add a Javascript animation to the tab switching action

export default App;
