import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabbutton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  let tabcontent=<p>Please select a topic.</p>
  if (selectedTopic) {
    tabcontent=(<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>);
  }
    return(
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <Tabbutton isSelected={selectedTopic==='components'} onClick={()=>handleSelect('components')}>Components</Tabbutton>
                    <Tabbutton isSelected={selectedTopic==='jsx'} onClick={()=>handleSelect('jsx')}>JSX</Tabbutton>
                    <Tabbutton isSelected={selectedTopic==='props'} onClick={()=>handleSelect('props')}>Props</Tabbutton>
                    <Tabbutton isSelected={selectedTopic==='state'} onClick={()=>handleSelect('state')}>State</Tabbutton>
                </>
            }>{tabcontent}</Tabs>
        </Section>
    );
}