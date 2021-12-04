import "../assets/styles/descriptionproduct.scss"
import ProductDesc from "../components/ProductDesc";
import Header from "../components/Header"
function DescriptionProduct() {
  return (
    <>
      <Header />
      <main className="descriptionproduct p-4">
        <ProductDesc />
      </main>
    </>
  );
}

export default DescriptionProduct;