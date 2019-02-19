export const APP_STATES = {
    INIT: 0,
    LOADING: 1,
    RESULTS: 2,
    ERROR: 3,
};

export const TABLE_COLUMNS = [
    {
        id: 'name',
        text: 'Name',
        field: 'name',
        type: 'text',
    },
    {
        id: 'height',
        text: 'height',
        field: 'height',
        type: 'text',
    },
    {
        id: 'mass',
        text: 'Mass',
        field: 'mass',
        type: 'text',
    },
    {
        id: 'birth_year',
        text: 'Birth Year',
        field: 'birth_year',
        type: 'text',
    },
    {
        id: 'details_button',
        text: 'Actions',
        type: 'button',
        link: '/people',
        buttonText: 'Show details',
    },
];
