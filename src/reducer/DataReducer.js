import {addNode} from "../utils/addNode"
export const DataReducer = (state,action) => {

    switch (action.type){
        case "Add":
            return addNode(state,action.parentValue,action.nodeValue);
    }
}