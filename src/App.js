import * as math from './math.js';
import './App.css';



function App() {
  return (
  <div>

  </div>
    
  );
  
}
export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

export default App;
