import React, { useEffect, useState } from 'react';
import { Footer, Navbar, NavbarHead } from '../Layouts';
import { AlsoLike, Details } from '../Components/Product';
import { useParams } from 'react-router-dom';
import loading from '../assets/images/loading.gif'

const Product = ({ collections }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const extractProductId = (fullId) => fullId.split("/").pop();

    const fetchProduct = () => {
      const product = collections
        ?.flatMap(collection => collection.node.products.edges)
        .find(product => extractProductId(product.node.id) === id);
      setProduct(product);
    };

    fetchProduct();
  }, [id, collections]);

  if (!product) {
    return <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'><img src={loading} alt="loading" /></div>;
  }

  return (
    <div className="container">
      <NavbarHead />
      <Navbar />
      <Details product={product} />
      <AlsoLike />
      <Footer />
    </div>
  );
};

export default Product;
