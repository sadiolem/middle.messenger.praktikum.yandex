import Handlebars from 'handlebars';

import avatar from './components/avatar/avatar.hbs?raw';
import button from './components/button/button.hbs?raw';
import chatItem from './components/chat-item/chat-item.hbs?raw';
import chatSidebar from './components/chat-sidebar/chat-sidebar.hbs?raw';
import conversation from './components/conversation/conversation.hbs?raw';
import formField from './components/form-field/form-field.hbs?raw';
import input from './components/input/input.hbs?raw';
import link from './components/link/link.hbs?raw';
import message from './components/message/message.hbs?raw';
import modal from './components/modal/modal.hbs?raw';
import profileField from './components/profile-field/profile-field.hbs?raw';
import title from './components/title/title.hbs?raw';

import authLayout from './layouts/auth-layout.hbs?raw';
import profileLayout from './layouts/profile-layout.hbs?raw';

const partials = {
    'avatar': avatar,
    'button': button,
    'chat-item': chatItem,
    'chat-sidebar': chatSidebar,
    'conversation': conversation,
    'form-field': formField,
    'input': input,
    'link': link,
    'message': message,
    'modal': modal,
    'profile-field': profileField,
    'title': title,
    'auth-layout': authLayout,
    'profile-layout': profileLayout,
};

Object.entries(partials).forEach(([name, template]) => {
    Handlebars.registerPartial(name, template);
});

export { Handlebars };
