export const fetchHeroes =(request) => (dispatch) => {
     dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    request("http://localhost:3001/filters")
        .then(filters => dispatch(uploadFilters(filters)))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
}
export const createHeroes = (values,id) => {
    return {
        type: 'HEROES_CREATE',
        payload: {...values,id:id}
    }
}
export const uploadFilters = (filters) => {
    return {
        type: 'UPLOAD_FILTERS',
        payload: filters
    }
}
export const filterHeroes = (element) =>  {
    return {
        type: 'FILTER_HEROES',
        payload: element
    }
}