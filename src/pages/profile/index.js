import profileTemplate from './profile.hbs?raw';
import profileEditTemplate from './profile-edit.hbs?raw';
import profilePasswordTemplate from './profile-password.hbs?raw';
import { user } from '../../mocks/user.js';

export const ProfilePage = {
    template: profileTemplate,
    context: { user },
};

export const ProfileEditPage = {
    template: profileEditTemplate,
    context: { user },
};

export const ProfilePasswordPage = {
    template: profilePasswordTemplate,
    context: { user },
};
