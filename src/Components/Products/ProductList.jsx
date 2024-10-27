

const ProductList = (props) => {
  return (
    <div className="productContainer">
      <img src={props.image} alt="" id="imgP" />
      <h3>{props.Name}</h3>
      <h3>{props.Price}</h3>
      <p>{props.Description}</p>
    </div>
  );
};
export default ProductList;
