import axios from "axios";

import { useState, useEffect } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get();

      const data = response.data;
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      Produtos
      <div>{produtos}</div>
    </div>
  );
}

export default Produtos;
