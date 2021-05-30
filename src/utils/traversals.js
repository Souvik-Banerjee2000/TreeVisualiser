var result = [];
function inorderTraversal(root){


    // console.log(result);
    // console.log(root);
    // result.push(root.name)
    // console.log(root);
    if(root.attributes.left !== ""){
        inorderTraversal(root.children[0])
    }

    result.push(root.name);

    if(root.attributes.right !== ""){
        if(root.children.length >1)
            inorderTraversal(root.children[1]);
        else
            inorderTraversal(root.children[0]);    
    }
}



function preorderTraversal(root){

    result.push(root.name);

    if(root.attributes.left !== ""){
        preorderTraversal(root.children[0])
    }

    if(root.attributes.right !== ""){

        if(root.children.length >1)
            preorderTraversal(root.children[1]);
        else
            preorderTraversal(root.children[0]); 
    }


}

function postorderTraversal(root){

    if(root.attributes.left !== ""){
        postorderTraversal(root.children[0])
    }

    if(root.attributes.right !== ""){

        if(root.children.length >1)
            postorderTraversal(root.children[1]);
        else
            postorderTraversal(root.children[0]); 
    }
    result.push(root.name);
}


// function levelorderTraversal(root){

//     if(root.attributes.left !== ""){
//         postorderTraversal(root.children[0])
//     }

//     if(root.attributes.right !== ""){

//         if(root.children.length >1)
//             postorderTraversal(root.children[1]);
//         else
//             postorderTraversal(root.children[0]); 
//     }
//     result.push(root.name);
// }


export const inorder = (state,data)=>{

    // console.log(state);
    result = [];
    if(Object.keys(data).length > 0){
        inorderTraversal(data);
        console.log(result);
    }    
    return JSON.parse(JSON.stringify(result));
}


export const preorder = (state,data)=>{

    result = [];
    if(Object.keys(state).length > 0){
        preorderTraversal(data);
        console.log(result);
    }   
    return JSON.parse(JSON.stringify(result));

}

export const postorder = (state,data)=>{

    result = [];
    // console.log(state);
    if(Object.keys(state).length > 0){
        postorderTraversal(data);
        console.log(result);
    }   
    return JSON.parse(JSON.stringify(result));

}
