const count=0;
export default function Reducer(state=count,Action){
    const {type,payload}=Action;
    switch(type){
        case "Increment":
            return state+payload;
            case "Decrement":
                return state-payload;
                default:
                return state;
    }
}




