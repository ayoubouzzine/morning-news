export default function (language = null, action) {

    switch (action.type) {
        case 'changeLanguage':
            return action.language;

        default:
            return language;
    }
}; 