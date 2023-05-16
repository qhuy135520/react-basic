const initState = {
    users: [
        { id: 1, name: "Le Huy" },
        { id: 2, name: "Eric" },
        { id: 3, name: "Le Huy Soai Ca" }], post: []

}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            console.log(action)

            let users = state.users

            users = users.filter(item => item.id !== action.payload.item.id)
            return {
                ...state, users
            }
        case "ADD_USER":
            let id = Math.floor(Math.random() * 1001)
            let user = { id: id, name: `random ${id}` }
            return {
                ...state, users: [...state.users,user]
            }
            break;
        default:
            return state;
    }
}
export default rootReducer
