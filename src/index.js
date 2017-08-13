import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAnq1KPNh-tzgqMDc3VtfBbJeSucyBf2sY';

const App = () => {
    return <div>sample component</div>;
}

const container = document.querySelector('div.container');
const component = <App />;

ReactDOM.render(component, container);
