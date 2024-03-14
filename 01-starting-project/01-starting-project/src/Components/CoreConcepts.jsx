import Coreconcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export default function CoreConcepts(){
    return(
        <section id='core-concepts'>
          <h2>Core Concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><Coreconcept key={conceptItem.title}
            {...conceptItem}/>)}
          </ul>
        </section>
    );
}