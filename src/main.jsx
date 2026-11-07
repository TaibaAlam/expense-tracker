import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from "react-redux";
import store from "./App/src.js"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Toaster />
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
