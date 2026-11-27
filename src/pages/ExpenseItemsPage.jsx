import "../styles/ExpenseItemsPage.css";
import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products";
const ITEMS_PER_PAGE = 6;

function ExpenseItemsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentpage, setCurrentpage] = useState(1);

  const fatchProducts = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not load expense items");
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (fetchError) {
      console.log(fetchError.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fatchProducts();
  }, []);

  const totalpages = Math.ceil(products.length / ITEMS_PER_PAGE);
  console.log(totalpages);

  const startIndex = (currentpage - 1) * ITEMS_PER_PAGE;
  console.log(startIndex);

  const visibleproducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  return (
    <main className="expense-items">
      <header className="items-header">
        <h1>Expense Items</h1>
        <span>Browse items and their prices from the API.</span>
      </header>

      {loading && <p className="items-message"> Loading items..</p>}

      {!loading && (
        <section className="items-grid">
          {visibleproducts.map((product) => (
            <article className="items-card" key={product.id}>
              <div className="items-card-top">
                <span>{product.category}</span>
                <strong>${product.price}</strong>
              </div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </article>
          ))}
        </section>
      )}

      {!loading && totalpages > 1 && (
        <div className="padination">
          <button
            type="button"
            onClick={() => setCurrentpage((page) => page - 1)}
            disabled={currentpage === 1}
          >
            previous
          </button>
          <span>
            page {currentpage} of {totalpages}
          </span>
          <button 
          type="button"
          onClick={() => setCurrentpage((page) => page + 1)}
          disabled={currentpage === totalpages}
          >
            Next 
            </button>
        </div>
      )}
    </main>
  );
}

export default ExpenseItemsPage;
