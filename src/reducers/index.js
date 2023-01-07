const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filter : 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETE' :
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)

            }
        case 'HEROES_CREATE' :
            return {
                ...state,
                heroes: [...state.heroes, action.payload]

            }
        case 'UPLOAD_FILTERS' :
            return {
                ...state,
                filters: action.payload

            }
        case 'FILTER_HEROES' :
            return {
                ...state,
                filter: action.payload

            }                   
        default: return state
    }
}

export default reducer;