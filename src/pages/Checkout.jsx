  import React, { useState } from "react";
  import { Footer, Navbar } from "../components";
  import { useSelector } from "react-redux";
  import { Link } from "react-router-dom";

  const Checkout = () => {
    const cartItems = useSelector((state) => state.handleCart);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      address2: "",
      country: "",
      state: "",
      zip: "",
      cardName: "",
      cardNumber: "",
      cardExpiration: "",
      cvv: "",
      submitted: false,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevalue) => ({
        ...prevalue,
        [name]: value
      }));
      setTimeout(() => {
        e.target.focus();
      }, 0);
    };

    const handleCheckout = (e) => {
      e.preventDefault();
      console.log("Form Data:", formData);

      setFormData({
        ...formData,
        submitted: true,
      });
      localStorage.removeItem('cart');
      alert("Your order has been placed!");
    };

    const EmptyCart = () => (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    cartItems.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    cartItems.map((item) => {
      return (totalItems += item.qty);
    });
    
  const CheckoutForm = () => (
        <div className="container my-3 py-3">
          <h1 className="text-center">Checkout</h1>
          <hr />
          {cartItems.length ? (
            <div className="row">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h4 className="mb-0">Billing address</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleCheckout} className="needs-validation">
                      <div className="row g-3">
                        <div className="col-sm-6 my-1">
                          <label htmlFor="firstName" className="form-label">
                            First name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>
                         
                        <div className="col-sm-6 my-1">
                          <label htmlFor="lastName" className="form-label">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address for shipping
                            updates.
                          </div>
                        </div>

                        <div className="col-12 my-1">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="1234 Main St"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="address2" className="form-label">
                            Address 2{" "}
                            <span className="text-muted">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            placeholder="Apartment or suite"
                          />
                        </div>

                        <div className="col-md-5 my-1">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <br />
                          <select
                            className="form-select"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Choose...</option>
                            <option>India</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>

                        <div className="col-md-4 my-1">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <br />
                          <select
                            className="form-select"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Choose...</option>
                            <option>Maharashtra</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </div>

                        <div className="col-md-3 my-1">
                          <label htmlFor="zip" className="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            placeholder=""
                            pattern="[0-9]{6}"
                            title="Enter a valid zip code"
                            required
                          />
                          <div className="invalid-feedback">Zip code required.</div>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3">Payment</h4>

                        <div className="col-md-6">
                          <label htmlFor="cc-name" className="form-label">
                            Name on card
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-name"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder=""
                            required
                          />
                          <small className="text-muted">
                            Full name as displayed on card
                          </small>
                          <div className="invalid-feedback">Name on card is required</div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="cc-number" className="form-label">
                            Card number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-number"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            pattern="[0-9]{16}"
                            title="Enter a valid card number"
                            placeholder=""
                            required
                          />
                          <div className="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="cc-expiration" className="form-label">
                            Expiration Year
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-expiration"
                            name="cardExpiration"
                            value={formData.cardExpiration}
                            onChange={handleChange}
                            pattern="[0-9]{4}"
                            title="Enter a valid year"
                            placeholder=""
                            required
                          />
                          <div className="invalid-feedback">Expiration date required</div>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="cc-cvv" className="form-label">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder=""
                            pattern="[0-9]{3}"
                            title="CVV should be a 3-digit number"
                            required
                          />
                          <div className="invalid-feedback">
                            Security code required. Please enter a valid 3-digit CVV.
                          </div>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <button className="w-100 btn btn-primary" type="submit">
                        Continue to checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  {/* Order Summary content goes here */}
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})
                        <span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>
    );
    var randomTransactionId = Math.floor(Math.random() * 9000000000) + 1000000000;
    const OrderConfirmation = () => (
      <div className="container my-3 py-3">
        <h1 className="text-center">Order Confirmation</h1>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h3 className="my-5">Your Order Details:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image} 
                        alt={item.title}
                        style={{ width: "80px", height: "80px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="my-5">Shipping Address:</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td><strong>First Name:</strong></td>
                  <td>{formData.firstName}</td>
                </tr>
                <tr>
                  <td><strong>Last Name:</strong></td>
                  <td>{formData.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{formData.email}</td>
                </tr>
                <tr>
                  <td><strong>Address:</strong></td>
                  <td>{formData.address}</td>
                </tr>
                <tr>
                  <td><strong>Country:</strong></td>
                  <td>{formData.country}</td>
                </tr>
                <tr>
                  <td><strong>State:</strong></td>
                  <td>{formData.state}</td>
                </tr>
                <tr>
                  <td><strong>Zip:</strong></td>
                  <td>{formData.zip}</td>
                </tr>
              </tbody>
            </table>
            <h3 className="my-5">Payment Details:</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{formData.cardName}</td>
                </tr>
                <tr>
                  <td><strong>Transaction Id:</strong></td>
                  <td>{randomTransactionId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
    
    

    return (
      <>
        <Navbar />
        {formData.submitted ? (
          <OrderConfirmation formData={formData} />
        ) : cartItems.length ? (
          <CheckoutForm />
        ) : (
          <EmptyCart />
        )}
        <Footer />
      </>
    );
  };
  export default Checkout;