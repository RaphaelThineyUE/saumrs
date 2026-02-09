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
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
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
  const [submitProgress, setSubmitProgress] = useState<
    Array<{ label: string; status: 'pending' | 'success' | 'warning' }>
  >([]);

  useEffect(() => {
    if (products.length === 0) {
      setProducts([createProductRow()]);
    }
  }, [products.length]);

  const totalAmount = useMemo(
    () => products.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [products]
  );

  const showError = (name: string, error: string) =>
    Boolean(error && (hasSubmitted || touchedFields[name]));

  const requiredError = (value: string, label: string) =>
    value.trim() ? '' : `${label} is required.`;

  const emailError = (() => {
    if (!formData.customerEmail.trim()) return 'Email is required.';
    return /\S+@\S+\.\S+/.test(formData.customerEmail.trim())
      ? ''
      : 'Enter a valid email.';
  })();

  const phoneDigits = formData.customerPhone.replace(/\D/g, '');
  const phoneError = phoneDigits.length === 10 ? '' : 'Enter a 10-digit phone.';

  const zipDigits = formData.zipCode.replace(/\D/g, '');
  const zipError = zipDigits.length === 5 ? '' : 'Enter a 5-digit ZIP.';

  const cardNumberDigits = cardData.cardNumber.replace(/\D/g, '');
  const cardNumberError =
    cardNumberDigits.length === 0
      ? ''
      : cardNumberDigits.length >= 13 && cardNumberDigits.length <= 19
        ? ''
        : 'Card number looks incomplete.';

  const cardExpiryError = (() => {
    if (!cardData.cardExpiry.trim()) return '';
    const match = cardData.cardExpiry.match(/^(\d{2})\/(\d{2})$/);
    if (!match) return 'Use MM/YY format.';
    const month = Number(match[1]);
    return month >= 1 && month <= 12 ? '' : 'Invalid month.';
  })();

  const cardCvcError = (() => {
    if (!cardData.cardCvc.trim()) return '';
    return cardData.cardCvc.length >= 3 && cardData.cardCvc.length <= 4
      ? ''
      : 'CVC should be 3-4 digits.';
  })();

  const nameError = requiredError(formData.customerName, 'Full name');
  const addressError = requiredError(formData.address, 'Address');
  const cityError = requiredError(formData.city, 'City');
  const stateError = requiredError(formData.state, 'State');

  const markTouched = (name: string) => {
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const formatZip = (value: string) => value.replace(/\D/g, '').slice(0, 5);

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 19);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const formatCvc = (value: string) => value.replace(/\D/g, '').slice(0, 4);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const nextValue = (() => {
      if (name === 'customerPhone') return formatPhone(value);
      if (name === 'zipCode') return formatZip(value);
      return value;
    })();

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextValue = (() => {
      if (name === 'cardNumber') return formatCardNumber(value);
      if (name === 'cardExpiry') return formatExpiry(value);
      if (name === 'cardCvc') return formatCvc(value);
      return value;
    })();
    setCardData((prev) => ({
      ...prev,
      [name]: nextValue,
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
    setHasSubmitted(true);

    const validProducts = products.filter((item) => item.name.trim() && item.price > 0);
    if (validProducts.length === 0) {
      setProductError('Add at least one product with a name and price.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitProgress([
      { label: 'Creating Account', status: 'pending' },
      { label: 'Creating order', status: 'pending' },
      { label: 'Creating products', status: 'pending' },
      { label: 'Sending email', status: 'pending' },
    ]);

    try {
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

      const response = await orderApi.submitOrder(orderData);
      const progress = response.data?.progress;
      if (Array.isArray(progress) && progress.length > 0) {
        setSubmitProgress(
          progress.map((step: { label: string; status: 'success' | 'warning' }) => ({
            label: step.label,
            status: step.status,
          }))
        );
      }
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
      setCardData({
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: '',
      });
      setTouchedFields({});
      setHasSubmitted(false);
      setProducts([createProductRow()]);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error placing order:', error);
      setSubmitStatus('error');
      setSubmitProgress([]);
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
            Add your items, then hit submit. We create your Account first, then link
            the products to the order behind the scenes — easy, breezy, and slightly
            magical.
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
                    onBlur={() => markTouched('customerName')}
                    className={showError('customerName', nameError) ? 'is-invalid' : ''}
                    required
                  />
                  {showError('customerName', nameError) && (
                    <span className="field-error">{nameError}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    onBlur={() => markTouched('customerEmail')}
                    className={showError('customerEmail', emailError) ? 'is-invalid' : ''}
                    required
                  />
                  {showError('customerEmail', emailError) && (
                    <span className="field-error">{emailError}</span>
                  )}
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
                    onBlur={() => markTouched('customerPhone')}
                    className={showError('customerPhone', phoneError) ? 'is-invalid' : ''}
                    inputMode="tel"
                    required
                  />
                  {showError('customerPhone', phoneError) && (
                    <span className="field-error">{phoneError}</span>
                  )}
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
                  onBlur={() => markTouched('address')}
                  className={showError('address', addressError) ? 'is-invalid' : ''}
                  required
                />
                {showError('address', addressError) && (
                  <span className="field-error">{addressError}</span>
                )}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={() => markTouched('city')}
                    className={showError('city', cityError) ? 'is-invalid' : ''}
                    required
                  />
                  {showError('city', cityError) && (
                    <span className="field-error">{cityError}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={() => markTouched('state')}
                    className={showError('state', stateError) ? 'is-invalid' : ''}
                    required
                  />
                  {showError('state', stateError) && (
                    <span className="field-error">{stateError}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Zip Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    onBlur={() => markTouched('zipCode')}
                    className={showError('zipCode', zipError) ? 'is-invalid' : ''}
                    inputMode="numeric"
                    required
                  />
                  {showError('zipCode', zipError) && (
                    <span className="field-error">{zipError}</span>
                  )}
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
                  <div
                    key={item.id}
                    className={`product-row${
                      hasSubmitted && (!item.name.trim() || item.price <= 0 || item.quantity < 1)
                        ? ' invalid'
                        : ''
                    }`}
                  >
                    <input
                      type="text"
                      value={item.name}
                      placeholder="Product name"
                      className={
                        hasSubmitted && !item.name.trim() ? 'is-invalid' : ''
                      }
                      onChange={(event) =>
                        updateProduct(index, 'name', event.target.value)
                      }
                    />
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      className={
                        hasSubmitted && item.quantity < 1 ? 'is-invalid' : ''
                      }
                      onChange={(event) =>
                        updateProduct(index, 'quantity', Number(event.target.value))
                      }
                    />
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      value={item.price}
                      className={
                        hasSubmitted && item.price <= 0 ? 'is-invalid' : ''
                      }
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
                    onBlur={() => markTouched('cardName')}
                  />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    onBlur={() => markTouched('cardNumber')}
                    className={showError('cardNumber', cardNumberError) ? 'is-invalid' : ''}
                    placeholder="XXXX XXXX XXXX XXXX"
                    inputMode="numeric"
                  />
                  {showError('cardNumber', cardNumberError) && (
                    <span className="field-error">{cardNumberError}</span>
                  )}
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
                    onBlur={() => markTouched('cardExpiry')}
                    className={showError('cardExpiry', cardExpiryError) ? 'is-invalid' : ''}
                    placeholder="MM/YY"
                    inputMode="numeric"
                  />
                  {showError('cardExpiry', cardExpiryError) && (
                    <span className="field-error">{cardExpiryError}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="text"
                    name="cardCvc"
                    value={cardData.cardCvc}
                    onChange={handleCardChange}
                    onBlur={() => markTouched('cardCvc')}
                    className={showError('cardCvc', cardCvcError) ? 'is-invalid' : ''}
                    inputMode="numeric"
                  />
                  {showError('cardCvc', cardCvcError) && (
                    <span className="field-error">{cardCvcError}</span>
                  )}
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

          <aside className="order-summary scroll-animate">
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
              {submitProgress.length > 0 && (
                <div className="submit-progress" aria-live="polite">
                  {submitProgress.map((step, index) => (
                    <div
                      key={`${step.label}-${index}`}
                      className={`progress-step ${step.status}`}
                    >
                      <span>{step.label}</span>
                      <span className="progress-status">
                        {step.status === 'pending'
                          ? 'Working'
                          : step.status === 'warning'
                            ? 'Warning'
                            : 'Done'}
                      </span>
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
