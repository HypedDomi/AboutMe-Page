import { createRoot } from 'react-dom/client';
import WebContent from './app';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WebContent />);