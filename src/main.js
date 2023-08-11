import home from './components/home.js';
import project from './components/project.js';
import error from './components/error404.js';
import about from './components/aboutMe.js';

const routes = [
    { path: '/', component: home },
    { path: '/project', component: project },
    { path: '/error', component: error },
    { path: '/about', component: about }
]; 

const defaultRoute = '/';
const root = document.getElementById('root');

const navigateTo = (hash) => {
    const route = routes.find((routeFound) => routeFound.path === hash);
    if (route && route.component) {
        window.history.pushState({}, route.path, window.location.origin + route.path);
        if (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        root.appendChild(route.component(navigateTo));
    } else {
        navigateTo('/error');
    }
};

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);












