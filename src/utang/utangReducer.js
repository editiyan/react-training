const initialState = {
    utang: 100000
}

const utangReducer = (state=initialState, action) => {
    switch (action.type) {
        case "TAMBAH":
            return { utang: state.utang + 1000 }
        case "BAYAR":
            return { utang: state.utang - 1000 }
        case "LUNASI":
            return { utang: 0 }
        default:
            return state;
    }
}

export default utangReducer