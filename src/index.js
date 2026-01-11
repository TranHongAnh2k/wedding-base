import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import CSS Variables trước (cần cho các file khác)
import './css/variables.css';
// Import SCSS main file (tự động import tất cả partials)
import './scss/main.scss';
// Import CSS files minified (không thể import trong SCSS)
import './css/element-styles.css';
import './css/dynamic-styles.css';
import './utils/errorHandler';
import App from './App';

// Check if root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
  // Create root element if it doesn't exist
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  const root = ReactDOM.createRoot(newRoot);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
    // Fallback: render error message
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red;">
        <h1>Error rendering React app</h1>
        <pre>${error.toString()}</pre>
      </div>
    `;
  }
}

