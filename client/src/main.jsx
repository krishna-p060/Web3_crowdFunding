import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import {ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import './index.css';

import { StateContextProvider } from './context';
import App from './App';
const root = createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
            <StateContextProvider>
            <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)