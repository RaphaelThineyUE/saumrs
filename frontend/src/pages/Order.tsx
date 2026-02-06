import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { orderApi, OrderData, Product } from '../api/client';
import './Order.css';

export const Order = () => {
  useScrollAnimation();
  const [cart, setCart] = useState<Product[]>([
    { id: '1', name: 'SAUMRS Monthly Supply', quantity: 1, price: 99.99 },
  ]);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    if (quantity < 1) return;
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  const removeItem = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const orderData: OrderData = {
        ...formData,
        products: cart,
        totalAmount,
      };

      await orderApi.submitOrder(orderData);
      setSubmitStatus('success');
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        notes: '',
      });
      setCart([]);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error placing order:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-page">
      <section className="page-title scroll-animate">
        <h1>Place Your Order</h1>
      </section>

      <section className="order-container">
        <div className="order-form scroll-animate">
          <h2>Order Information</h2>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Order placed successfully! Check your email for confirmation.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ Error placing order. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Order Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special instructions or requests?"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting || cart.length === 0}>
              {isSubmitting ? 'PROCESSING...' : 'COMPLETE ORDER'}
            </button>
          </form>
        </div>

        <aside className="order-summary scroll-animate">
          <h2>Order Summary</h2>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="item-quantity">
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity - 1)}
                        type="button"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        min="1"
                      />
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity + 1)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(index)}
                      type="button"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};
