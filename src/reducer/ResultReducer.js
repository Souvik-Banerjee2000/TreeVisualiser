import {inorder,preorder,postorder,levelorder,leftView,rightView,findKthMax,findKthMin} from "../utils/traversals";
export const ResultReducer = (state,action) => {

    switch (action.type){
        case "Inorder":
            return inorder(state,action.data);
        case "Preorder":
            return preorder(state,action.data); 
        case "Postorder":
            return postorder(state,action.data);  
        case "Levelorder":
            return levelorder(state,action.data);    
        case "LeftView":
            return leftView(state,action.data);    
        case "RightView":
            return rightView(state,action.data);  
        case "FindKthMin":
            return findKthMin(state,action.data,action.inputValue);
        case "FindKthMax":
            return findKthMax(state,action.data,action.inputValue);         
        case "Select":
            return [];                       
        default:
            return state;    

    }
}