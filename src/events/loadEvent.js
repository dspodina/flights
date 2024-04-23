import loadHandler from '../handlers/loadHandler.js';

const loadPageEvent = () => {
    window.addEventListener('load', loadHandler);
};

export default loadPageEvent;
