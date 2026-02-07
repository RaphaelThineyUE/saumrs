import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { orderApi, OrderData, Product } from '../api/client';
import { subscriptionPlans } from '../data/subscriptionPlans';
import './Order.css';
const defaultPlan = subscriptionPlans[0];
const singleBagProductId = 'single-bag';

export const Order = () => {
  useScrollAnimation();
  const [orderType, setOrderType] = useState<'subscription' | 'one-time'>('subscription');
  const [selectedPlanId, setSelectedPlanId] = useState(defaultPlan.id);
  const [planAmount, setPlanAmount] = useState(defaultPlan.minPrice);
  const [planAmountError, setPlanAmountError] = useState('');
  const [singleBagPrice, setSingleBagPrice] = useState(225);
  const [singleBagQuantity, setSingleBagQuantity] = useState(1);
  const [cart, setCart] = useState<Product[]>([]);
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
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (orderType === 'subscription') {
      const selectedPlan =
        subscriptionPlans.find((plan) => plan.id === selectedPlanId) || defaultPlan;

      setCart([
        {
          id: selectedPlan.id,
          name: `${selectedPlan.title} ${selectedPlan.subtitle}`,
          quantity: 1,
          price: planAmount,
        },
      ]);
      return;
    }

    setCart([
      {
        id: singleBagProductId,
        name: 'Single Bag (One-Time)',
        quantity: singleBagQuantity,
        price: singleBagPrice,
      },
    ]);
  }, [orderType, selectedPlanId, planAmount, singleBagPrice, singleBagQuantity]);

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
    if (!newCart[index]) return;
    newCart[index].quantity = quantity;
    setCart(newCart);
    if (newCart[index].id === singleBagProductId) {
      setSingleBagQuantity(quantity);
    }
  };

  const removeItem = (index: number) => {
    const targetItem = cart[index];
    if (targetItem?.id === singleBagProductId) {
      setSingleBagQuantity(1);
    }
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectedPlan =
    subscriptionPlans.find((plan) => plan.id === selectedPlanId) || defaultPlan;
  const planRangeLabel = `$${selectedPlan.minPrice.toLocaleString()}-${selectedPlan.maxPrice.toLocaleString()}`;

  const validatePlanAmount = (value: number) => {
    if (value < selectedPlan.minPrice || value > selectedPlan.maxPrice) {
      return `Enter an amount between ${planRangeLabel}.`;
    }

    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      setSubmitStatus('error');
      return;
    }

    if (orderType === 'subscription') {
      const validationMessage = validatePlanAmount(planAmount);
      if (validationMessage) {
        setPlanAmountError(validationMessage);
        return;
      }
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

            <div className="order-type-section">
              <h3>Order Type</h3>
              <div className="order-type-options">
                <label className={orderType === 'subscription' ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="orderType"
                    value="subscription"
                    checked={orderType === 'subscription'}
                    onChange={() => {
                      setOrderType('subscription');
                      setPlanAmountError('');
                    }}
                  />
                  Subscription Plan
                </label>
                <label className={orderType === 'one-time' ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="orderType"
                    value="one-time"
                    checked={orderType === 'one-time'}
                    onChange={() => {
                      setOrderType('one-time');
                      setPlanAmountError('');
                    }}
                  />
                  One-Time Bag
                </label>
              </div>
            </div>

            {orderType === 'subscription' ? (
              <div className="subscription-section">
                <h3>Subscription Plan</h3>
                <p className="subscription-helper">
                  Select the plan that matches the subscription options shown in pricing.
                </p>
                <div className="subscription-grid">
                  {subscriptionPlans.map((plan) => (
                    <label
                      key={plan.id}
                      className={`subscription-card ${selectedPlanId === plan.id ? 'selected' : ''}`}
                    >
                      <span className="subscription-radio">
                        <input
                          type="radio"
                          name="subscriptionPlan"
                          value={plan.id}
                          checked={selectedPlanId === plan.id}
                          onChange={() => {
                            setSelectedPlanId(plan.id);
                            setPlanAmount(plan.minPrice);
                            setPlanAmountError('');
                          }}
                          required
                        />
                        <span className="radio-indicator" aria-hidden="true"></span>
                      </span>
                      <div className="subscription-card-body">
                        {plan.ribbon && <span className="subscription-badge">{plan.ribbon}</span>}
                        <div className="subscription-title">
                          <h4>{plan.title}</h4>
                          <span>{plan.subtitle}</span>
                        </div>
                        <div className="subscription-pricing">
                          <span className="price-range">{plan.price}</span>
                          <span className="price-period">{plan.period}</span>
                        </div>
                        <ul className="subscription-features">
                          {plan.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="form-row wide">
                  <div className="form-group">
                    <label>Plan Total (USD) *</label>
                    <input
                      type="number"
                      name="planAmount"
                      min={selectedPlan.minPrice}
                      max={selectedPlan.maxPrice}
                      step="1"
                      value={planAmount}
                      onChange={(event) => {
                        const value = Number(event.target.value);
                        setPlanAmount(value);
                        setPlanAmountError(validatePlanAmount(value));
                      }}
                      required
                    />
                    {planAmountError ? (
                      <p className="subscription-error">{planAmountError}</p>
                    ) : (
                      <p className="subscription-helper">
                        Enter an amount within {planRangeLabel} for the selected plan.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="one-time-section">
                <h3>One-Time Bag</h3>
                <p className="subscription-helper">
                  Order a single bag without subscribing.
                </p>
              </div>
            )}

            <div className="payment-section">
              <h3>Payment Details (Optional)</h3>
              <p className="subscription-helper">
                If you want us to collect card details now, add them here.
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label>Name on Card</label>
                  <input
                    type="text"
                    name="cardName"
                    value={cardData.cardName}
                    onChange={handleCardChange}
                    autoComplete="cc-name"
                  />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    autoComplete="cc-number"
                    inputMode="numeric"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry (MM/YY)</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={cardData.cardExpiry}
                    onChange={handleCardChange}
                    autoComplete="cc-exp"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="text"
                    name="cardCvc"
                    value={cardData.cardCvc}
                    onChange={handleCardChange}
                    autoComplete="cc-csc"
                    inputMode="numeric"
                  />
                </div>
              </div>
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
                      {item.id.startsWith('plan-') ? (
                        <span className="item-quantity-static">Qty 1</span>
                      ) : (
                        <>
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity - 1)}
                            type="button"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(index, parseInt(e.target.value))
                            }
                            min="1"
                          />
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity + 1)}
                            type="button"
                          >
                            +
                          </button>
                        </>
                      )}
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    {!item.id.startsWith('plan-') && (
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(index)}
                        type="button"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    )}
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
