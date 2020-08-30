export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const LOAD_DATA = "LOAD_DATA";
export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";

export const setSearchText = (text) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: text
    }
}

export const loadContent = (data) => {
    return {
        type: LOAD_INITIAL_DATA,
        payload: data
    }
}

export const loadData = () => {
    return { type: LOAD_DATA }
}