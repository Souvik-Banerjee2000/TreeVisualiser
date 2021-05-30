import {addNode} from "../utils/addNode";
import {inorder,preorder,postorder} from "../utils/traversals";
export const DataReducer = (state,action) => {

    switch (action.type){
        case "Add":
            return addNode(state,action.parentValue,action.nodeValue);
        default:
            return state;    

    }
}