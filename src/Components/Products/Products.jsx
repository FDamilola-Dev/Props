import ProductList from "../Products/ProductList.jsx";
// import Samsung from "../../assets/images/samsung.webp";\
import Samsung from "../../assets/images/Samsung.webp";
import Landline from "../../assets/images/landline.webp";
import Iphone from "../../assets/images/iphone.webp";
import Landline2 from"../../assets/images/landline2.jpeg"
import "./Products.css"

const Products = () => {
  return (
    <>
      <ProductList
        image={Samsung}
        Name="Vite "
        Price="N200,000"
        Description="An exclusive sleeky gagdet"
      />

      <ProductList
        image={Landline}
        Name="Vintage Telephone"
        Price="N100,000"
        Description="A memory pricking home/Office gadget."
      />

      <ProductList className = "Ip"
        image={Iphone}
        Name="Iphone 14Pro"
        Price="N900,000"
        Description="An exclusive sleeky gagdet"
      />

      <ProductList
        image={Landline2}
        Name="Vintage Gadget"
        Price="N150,000"
        Description="An exclusive sleeky gagdet"
      />
    </>
  );
};

export default Products;
