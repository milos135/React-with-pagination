import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / itemsPerPage) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((prod) => {
              return (
                <span className="products__single" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              );
            })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            style={{ cursor: page === 1 ? "not-allowed" : "pointer" }}
          >
            ⬅
          </span>
          {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            style={{
              cursor:
                page === Math.ceil(products.length / itemsPerPage)
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            ➡
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
