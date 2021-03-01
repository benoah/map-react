import React from "react";

import Joke from "./Joke";
import jokesData from "./jokesData";
import Product from "./Product";
import productsData from "./vschoolProducts";

function App() {
  const productComponents = productsData.map((item) => (
    <Product key={item.id} product={item} />
  ));

  const jokeComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <div>
      {productComponents}
      <h1>nytt avsnitt</h1>
      {jokeComponents}
    </div>
  );
}

export default App;
