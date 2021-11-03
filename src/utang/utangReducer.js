const initialState = {
    utang: 0
}

const utangReducer = (state=initialState, action) => {
    switch (action.type) {
        case "TAMBAH":
            return { utang: state.utang + action.payload }
        case "BAYAR":
            return { utang: state.utang - action.payload }
        case "LUNASI":
            return { utang: 0 }
        default:
            return state;
    }
}

export default utangReducer