import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

ReactDom.render(
    
    <App />,
    document.querySelector('#root')
);