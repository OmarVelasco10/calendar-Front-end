import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles.css';

ReactDOM.render(
    <CalendarApp />,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
