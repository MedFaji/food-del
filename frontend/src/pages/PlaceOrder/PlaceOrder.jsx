import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="First name" required />
          <input type="text" name="" id="" placeholder="Last name" required />
        </div>
        <input type="phone" name="" id="" placeholder="Phone number" required />
        <input type="phone" name="" id="" placeholder="Email number" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              {getTotalCartAmount() > 0 ? (
                <p>${getTotalCartAmount() + 2}</p>
              ) : (
                <p>$0</p>
              )}
            </div>
          </div>
          <button>PROCEES TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
