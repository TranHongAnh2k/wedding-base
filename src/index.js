import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import CSS files directly
import './css/variables.css';
import './css/main.css';
import './css/dynamic-styles.css';
import './css/element-styles.css';
import './css/fonts.css';
import './css/iconfont.css';
import './css/animatev4.css';
import './css/scroll-reveal.css';
import './css/music-toggle.css';
import './css/spin-keyframes.css';
import './css/ejoy-styles.css';
import './css/custom-fonts.css';
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

