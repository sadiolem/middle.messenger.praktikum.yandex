import template from './chats.hbs?raw';
import { chats } from '../../mocks/chats.js';
import { messages } from '../../mocks/messages.js';

const activeChatId = 4;

export const ChatsPage = {
    template,
    context: { chats },
};

export const ChatPage = {
    template,
    context: {
        chats: chats.map((chat) => ({ ...chat, active: chat.id === activeChatId })),
        chat: chats.find((chat) => chat.id === activeChatId),
        messages,
    },
};
