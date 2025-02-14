
import ViewProductButton from "../components/Button";

const ProductCard = () => {
  // Static product details
  const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"; 
  const productName = "Camera";
  const productPrice = "$99.99";

  return (
    <div className="border p-4 rounded shadow-md w-64">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-700">{productPrice}</p>
      <div className="mt-3">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default ProductCard;
