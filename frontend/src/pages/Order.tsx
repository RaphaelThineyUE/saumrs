import { useEffect, useMemo, useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import { orderApi, OrderData, Product } from '../api/client';
import { subscriptionPlans } from '../data/subscriptionPlans';
import './Order.css';

const singleBagProductId = 'single-bag';

const createProductRow = (seed?: Partial<Product>): Product => ({
  id: seed?.id ?? `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: seed?.name ?? '',
  quantity: seed?.quantity ?? 1,
  price: seed?.price ?? 0,
});

export const Order = () => {
  useScrollAnimation();
  const [products, setProducts] = useState<Product[]>([]);
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
  const [productError, setProductError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const [submissionProgress, setSubmissionProgress] = useState<string[]>([]);

  useEffect(() => {
    if (products.length === 0) {
      setProducts([createProductRow()]);
    }
  }, [products.length]);

  const totalAmount = useMemo(
    () => products.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [products]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format phone number
    if (name === 'customerPhone') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 0) {
        if (formattedValue.length <= 3) {
          formattedValue = `(${formattedValue}`;
        } else if (formattedValue.length <= 6) {
          formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3)}`;
        } else {
          formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3, 6)}-${formattedValue.slice(6, 10)}`;
        }
      }
    }

    // Format zip code to numbers only
    if (name === 'zipCode') {
      formattedValue = value.replace(/\D/g, '').slice(0, 5);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    // Format expiry date
    if (name === 'cardExpiry') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      }
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    }

    // Format CVC to numbers only
    if (name === 'cardCvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const updateProduct = (
    index: number,
    field: keyof Product,
    value: string | number
  ) => {
    setProducts((prev) =>
      prev.map((item, currentIndex) => {
        if (currentIndex !== index) return item;
        return {
          ...item,
          [field]: value,
        };
      })
    );
  };

  const addProductRow = (seed?: Partial<Product>) => {
    setProducts((prev) => [...prev, createProductRow(seed)]);
  };

  const removeProduct = (index: number) => {
    setProducts((prev) => prev.filter((_, currentIndex) => currentIndex !== index));
  };

  const upsertProduct = (product: Product) => {
    setProducts((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex === -1) {
        return [...prev, product];
      }

      return prev.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + product.quantity, price: product.price }
          : item
      );
    });
  };

  const quickAddPlan = (planId: string) => {
    const plan = subscriptionPlans.find((item) => item.id === planId);
    if (!plan) return;
    upsertProduct({
      id: plan.id,
      name: `${plan.title} ${plan.subtitle}`,
      quantity: 1,
      price: plan.minPrice,
    });
  };

  const quickAddSingleBag = () => {
    upsertProduct({
      id: singleBagProductId,
      name: 'Single Bag (One-Time)',
      quantity: 1,
      price: 225,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProductError('');
    setSubmissionProgress([]);

    const validProducts = products.filter((item) => item.name.trim() && item.price > 0);
    if (validProducts.length === 0) {
      setProductError('Add at least one product with a name and price.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      setSubmissionProgress(['Processing order...']);
      
      const trimmedCardNumber = cardData.cardNumber.replace(/\s+/g, '');
      const cardLast4 = trimmedCardNumber ? trimmedCardNumber.slice(-4) : '';

      const orderData: OrderData = {
        ...formData,
        products: validProducts,
        totalAmount,
        cardName: cardData.cardName || undefined,
        cardLast4: cardLast4 || undefined,
        cardExpiry: cardData.cardExpiry || undefined,
      };

      await orderApi.submitOrder(orderData);
      
      setSubmitStatus('success');
      setSubmissionProgress([]);
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
      setCardData({
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: '',
      });
      setProducts([createProductRow()]);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error placing order:', error);
      setSubmitStatus('error');
      setSubmissionProgress([]);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-page">
      <section className="order-hero scroll-animate">
        <div className="order-hero-content">
          <span className="order-eyebrow">Build your order</span>
          <h1>Design a custom Saumrs stack.</h1>
          <p>
            Start by filling in your client details below, then use the quick-add buttons 
            or manually enter products. Your order and client profile will be automatically 
            created in our system.
          </p>
          <div className="order-hero-tags">
            <span>Multi-product friendly</span>
            <span>Flexible pricing</span>
            <span>Fast confirmation</span>
          </div>
        </div>
        <div className="order-hero-card">
          <div>
            <h3>How it works</h3>
            <ol>
              <li>Client profile created</li>
              <li>Products linked to the order</li>
              <li>Confirmation sent to your inbox</li>
            </ol>
          </div>
        </div>
      </section>

      <form className="order-form" onSubmit={handleSubmit}>
        <section className="order-grid">
          <div className="order-stack">
            <div className="order-panel scroll-animate">
              <div className="panel-header">
                <h2>Client details</h2>
                <p>We use this to create your client record.</p>
              </div>
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
                    placeholder="(555) 123-4567"
                    pattern="^\(\d{3}\) \d{3}-\d{4}$"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="order-panel scroll-animate">
              <div className="panel-header">
                <h2>Delivery details</h2>
                <p>Where should we send the order?</p>
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
                  <label>Zip Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="12345"
                    pattern="^\d{5}$"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="order-panel scroll-animate">
              <div className="panel-header">
                <h2>Products</h2>
                <p>Add as many products as you need. Pricing is per item.</p>
              </div>

              <div className="quick-add">
                <div className="quick-add-header">
                  <h3>Quick add</h3>
                  <span>Tap to drop into your list.</span>
                </div>
                <div className="quick-add-grid">
                  {subscriptionPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      className="quick-add-card"
                      onClick={() => quickAddPlan(plan.id)}
                    >
                      <span className="card-title">{plan.title}</span>
                      <span className="card-subtitle">{plan.subtitle}</span>
                      <span className="card-price">
                        ${plan.minPrice.toLocaleString()}+ / mo
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    className="quick-add-card highlight"
                    onClick={quickAddSingleBag}
                  >
                    <span className="card-title">Single Bag</span>
                    <span className="card-subtitle">One-time order</span>
                    <span className="card-price">$225</span>
                  </button>
                </div>
              </div>

              <div className="product-table">
                <div className="product-header">
                  <span>Product</span>
                  <span>Qty</span>
                  <span>Price</span>
                  <span>Total</span>
                  <span></span>
                </div>
                {products.map((item, index) => (
                  <div key={item.id} className="product-row">
                    <input
                      type="text"
                      value={item.name}
                      placeholder="Product name"
                      onChange={(event) =>
                        updateProduct(index, 'name', event.target.value)
                      }
                    />
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(event) =>
                        updateProduct(index, 'quantity', Number(event.target.value))
                      }
                    />
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={item.price}
                      onChange={(event) =>
                        updateProduct(index, 'price', Number(event.target.value))
                      }
                    />
                    <span className="line-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => removeProduct(index)}
                      aria-label="Remove product"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="product-actions">
                <button type="button" onClick={() => addProductRow()}>
                  + Add another product
                </button>
                {productError && <span className="field-error">{productError}</span>}
              </div>
            </div>

            <div className="order-panel scroll-animate">
              <div className="panel-header">
                <h2>Payment + notes</h2>
                <p>We only store card metadata for reference.</p>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Card Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={cardData.cardName}
                    onChange={handleCardChange}
                  />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                    pattern="^\d{4} \d{4} \d{4} \d{4}$"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={cardData.cardExpiry}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="text"
                    name="cardCvc"
                    value={cardData.cardCvc}
                    onChange={handleCardChange}
                    placeholder="123"
                    pattern="^\d{3,4}$"
                    maxLength={4}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Delivery instructions, custom notes, anything else."
                />
              </div>
            </div>
          </div>

          <aside className="order-summary">
            <div className="summary-card">
              <h3>Order summary</h3>
              <div className="summary-list">
                {products.map((item) => (
                  <div key={item.id} className="summary-line">
                    <div>
                      <span>{item.name || 'Unnamed product'}</span>
                      <span className="summary-meta">Qty {item.quantity}</span>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <span>Total</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting order...' : 'Submit order'}
              </button>
              {submissionProgress.length > 0 && (
                <div className="progress-list">
                  {submissionProgress.map((step, index) => (
                    <div key={index} className="progress-step">
                      {step}
                    </div>
                  ))}
                </div>
              )}
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
            </div>
          </aside>
        </section>
      </form>
    </div>
  );
};
