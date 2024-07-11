import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import "./styles.css";

const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { image } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main className="container">
      <section className="feed">
        <div className="feed-header">
          <h1>Cat facts/images</h1>
          <button type="button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <article className="card">
          <div className="description">{fact && fact}</div>
          <div className="image-coontainer">
            {image && (
              <img className="cat-image" src={image} alt="Random cat image" />
            )}
          </div>
        </article>
      </section>
    </main>
  );
};
export default App;
