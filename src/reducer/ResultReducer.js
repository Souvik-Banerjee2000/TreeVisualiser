import {inorder,preorder,postorder} from "../utils/traversals";
export const ResultReducer = (state,action) => {

    switch (action.type){
        case "Inorder":
            return inorder(state,action.data);
        case "Preorder":
            return preorder(state,action.data); 
        case "Postorder":
            return postorder(state,action.data);          
        default:
            return state;    

    }
}