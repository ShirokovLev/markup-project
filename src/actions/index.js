export const showPopup = () => {
    return {type: 'SHOW_POPUP'}
}

export const hidePopup = () => {
    return {type: 'HIDE_POPUP'}
}

export const addCard = (title, genre, rating, description, votes, price, oldPrice, discount, picUrl) => {
    return {type: 'ADD_CARD', title, genre, rating, description, votes, price, oldPrice, discount, picUrl}
}