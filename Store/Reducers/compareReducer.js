const initialState = {compareSimulation:[]}

export default function comparerSimul(state = initialState,action){
    let nextState
    switch (action.type) {
        case 'ADD_SIMULATION':
            nextState = {
                ...state,
                compareSimulation: state.compareSimulation
            }
            
            return nextState || state
        default:
            return state
    }
}