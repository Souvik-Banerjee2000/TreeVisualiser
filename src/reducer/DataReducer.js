import {addNode} from "../utils/addNode";
import {deleteNode} from "../utils/deleteNode";
export const DataReducer = (state,action) => {

    switch (action.type){
        case "Add":
            return addNode(state,action.parentValue,action.nodeValue);
        case "Deletion" :
            return deleteNode(state,action.inputValue);   
        default:
            return state;    

    }
}