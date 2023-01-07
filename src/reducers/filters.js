const initialState = {
    filters: [],
    filter : 'all'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        
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

export default filters;