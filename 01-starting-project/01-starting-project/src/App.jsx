import Header from "./Components/Header/Header";
import Coreconcepts from "./Components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import Tabbutton from "./Components/TabButton";
function App() {
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
            <Tabbutton>Components</Tabbutton>
            <Tabbutton>JSX</Tabbutton>
            <Tabbutton>Props</Tabbutton>
            <Tabbutton>State</Tabbutton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
