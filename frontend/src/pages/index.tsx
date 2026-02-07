export { FivePillars } from './FivePillars';
export { Ingredients } from './Ingredients';
export { Protein } from './Protein';
export { Home } from './Home';
export { Contact } from './Contact';
export { Order } from './Order';
export { Subscriptions } from './Subscriptions';
export { IngredientDetail } from './IngredientDetail';
export { ProteinDetail } from './ProteinDetail';

export const NotFound = () => (
  <div style={{ marginTop: '53px', padding: '4rem', minHeight: 'calc(100vh - 53px)', background: '#fff', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
  </div>
);
