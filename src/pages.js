import { NotFoundPage, ServerErrorPage } from './pages/error/index.js';

export const pages = {
    '/404': NotFoundPage,
    '/500': ServerErrorPage,
};
