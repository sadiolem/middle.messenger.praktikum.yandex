import template from './error.hbs?raw';

export const NotFoundPage = {
    template,
    context: { errorCode: 404, errorMessage: 'Не туда попали' },
};
export const ServerErrorPage = {
    template,
    context: { errorCode: 500, errorMessage: 'Мы уже фиксим' },
};
