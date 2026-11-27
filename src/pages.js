import { LoginPage } from './pages/login/index.js';
import { RegisterPage } from './pages/register/index.js';
import { ChatsPage, ChatPage } from './pages/chats/index.js';
import { ProfilePage, ProfileEditPage, ProfilePasswordPage } from './pages/profile/index.js';
import { NotFoundPage, ServerErrorPage } from './pages/error/index.js';

export const pages = {
    '/': LoginPage,
    '/sign-up': RegisterPage,
    '/messenger': ChatsPage,
    '/messenger/chat': ChatPage,
    '/settings': ProfilePage,
    '/settings/edit': ProfileEditPage,
    '/settings/password': ProfilePasswordPage,
    '/404': NotFoundPage,
    '/500': ServerErrorPage,
};
