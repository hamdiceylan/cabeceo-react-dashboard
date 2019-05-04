import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import ReduxToastr from 'react-redux-toastr'
import ScrollToTop from './app/common/util/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App';
import {configureStore} from './app/store/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const rootEl = document.getElementById('root');


let render = () =>{
    ReactDOM.render(
    <Provider store={store}>    
        <BrowserRouter>
            <ScrollToTop>
                {/* <ReduxToastr
                    position='bottom-right'
                    transitionIn='fadeIn' 
                    transitionOut='fadeOut' 
                /> */}
                <App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>, 
    rootEl);
}


if(module.hot){
    module.hot.accept('./app/layout/App',() => {
        setTimeout(render);
    })
}


render();

serviceWorker.unregister();
