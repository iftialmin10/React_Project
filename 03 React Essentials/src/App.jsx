import { CORE_CONCEPTS } from "./data.js"; // "" remove all extra space or we will get error
import Header from "./components/Header/Header.jsx"; // we named in capital letter bcz we use it like a tag
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header /> {/* Reused Header components */}
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            <CoreConcept
              tile={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2> Examples</h2>
          <menu>
            <TabButton>Component</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
