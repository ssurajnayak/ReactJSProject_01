import { useState } from "react";
import Header from "./Components/Header/Header";
import Coreconcepts from "./Components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import Tabbutton from "./Components/TabButton";
import {EXAMPLES} from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>
          <ul>
            <Coreconcepts 
            {...CORE_CONCEPTS[0]}/>
            <Coreconcepts 
            {...CORE_CONCEPTS[1]}
            />
            <Coreconcepts 
            {...CORE_CONCEPTS[2]} 
            />
            <Coreconcepts 
            {...CORE_CONCEPTS[3]} 
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Tabbutton onSelect={()=>handleSelect('components')}>Components</Tabbutton>
            <Tabbutton onSelect={()=>handleSelect('jsx')}>JSX</Tabbutton>
            <Tabbutton onSelect={()=>handleSelect('props')}>Props</Tabbutton>
            <Tabbutton onSelect={()=>handleSelect('state')}>State</Tabbutton>
          </menu>
          {!selectedTopic? <p>Please select a topic.</p>: <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
          
        </section>
      </main>
    </div>
  );
}

export default App;
