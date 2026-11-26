import "../styles/ExpenseItemsPage.css"
import { useEffect, useState } from "react"

const API_URL = "https://dummyjson.com/products";


function ExpenseItemsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
    return (
        <div>

        </div>
    )
}

export default ExpenseItemsPage
