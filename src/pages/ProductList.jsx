import { useState, useEffect } from "react"
import { useBudget } from "../context/BudgetContext"
import ProductCard from "./ProductCard";
const ProductList = () => {

    const [items, setItems] = useState([]);

    const filteredItems = [...items].filter((item) => item.price <= 30);

    const { budgetMode } = useBudget();


    function fetchItems() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setItems(res.data))
            .catch(error => console.log(error))

    }

    useEffect(() => {
        fetchItems()
    }, [])

    console.log(items);



    return (
        <div className="product-container">
            {(budgetMode ? filteredItems : items).map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ProductList