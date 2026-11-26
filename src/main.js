import { Handlebars } from './handlebars.js';
import { pages } from './pages.js';
import 'material-symbols/rounded.css';
import './styles/main.scss';

const root = document.getElementById('app');

if (!root) {
    throw new Error("Root (#app) element is missing");
}

const currentPath = window.location.pathname;
const currentPage = pages[currentPath] ?? pages['/404'];
const compiledTemplate = Handlebars.compile(currentPage.template)(currentPage.context);
root.innerHTML = compiledTemplate;
