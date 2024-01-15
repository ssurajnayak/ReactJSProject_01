import Header from "./Components/Header";
import Coreconcepts from "./Components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
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
      </main>
    </div>
  );
}

export default App;
