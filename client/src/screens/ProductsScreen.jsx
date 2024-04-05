import ProductCard from "../components/ProductCard";

const ProductsScreen = () => {
  return (
    <>
      <div>
        <ProductCard product={{name: 'smartphone'}} loading={false} />
      </div>
    </>
  );
}

export default ProductsScreen;