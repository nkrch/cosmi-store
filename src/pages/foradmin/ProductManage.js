import { useState } from "react";
import "../home/main.scss";
import "./productmanage.scss";

//import { db, storage } from "../../firebase/firebase_db";
//import { db, storage } from "../../firebase/config";
//import { ref, getStorage } from "firebase/storage";
//import { child } from "firebase/database";
export function ProductManage(params) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*
    // Upload image to Firebase Storage
    const storageRef = getStorage().ref(
      storage,
      `products/${String(productImage.name).toLowerCase}`
    );

    const fileRef = storageRef.child(`products/${productImage.name}`);
    await fileRef.put(productImage);
    const downloadURL = await fileRef.getDownloadURL();

    // Store product data in Cloud Firestore
    await db.collection("products").add({
      name: productName,
      description: productDescription,
      imageUrl: downloadURL,
    });
*/
    // Reset form
    setProductName("");
    setProductDescription("");
    setProductImage(null);
  };

  return (
    <div>
      <h2>ProductManage</h2>
      <div className="product-manage-container">
        <form className="product-form">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        <div className="product-card-demo">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <p>{price}</p>
          {productImage && <img src={URL.createObjectURL(productImage)} />}
        </div>
      </div>
    </div>
  );
}
