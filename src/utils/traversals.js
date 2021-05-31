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

function levelorderTraversal(root){

    let queue = [];
    result.push(root.name);
    queue.push(root);

    while(queue.length!==0){
        // let front = result.
        if(root.children.length > 0){
            queue.push(root.children[0]);
            result.push(root.children[0].name);
            if(root.children.length>1){
                queue.push(root.children[1]);
                result.push(root.children[1].name);
            }    
        }
        if(queue.length>0){
            queue.shift();
            if(queue.length>0)
                root = queue[0];
        }else
            break;
    }

}


function leftViewOfBST(root){


    let queue = [];
    let res = [];
    res.push([root,0]);
    queue.push([root,0]);
    let currentLevel;
    while(queue.length!==0){
        // let front = result.
        currentLevel = queue[0][1] ;
        if(root.children.length > 0){
            queue.push([root.children[0],currentLevel+1]);
            res.push([root.children[0],currentLevel+1]);
        
            if(root.children.length>1){
                queue.push([root.children[1],currentLevel+1]);
                res.push([root.children[1],currentLevel+1]);
                
            }    
        }
        if(queue.length>0){
            queue.shift();
            // console.log(queue);
            if(queue.length>0)
                root = queue[0][0];
        }else
            break;
    }
    currentLevel = 0;
    result.push(res[0][0].name);
    for(let i=1;i<res.length;i++){
        if(res[i][1]!=currentLevel){
            result.push(res[i][0].name);
            currentLevel = res[i][1];
        }
    }

}


export const leftView = (state,data) =>{


    result = [];
    // console.log(data);
    if(Object.keys(data).length > 0){
        leftViewOfBST(data);
        console.log(result);
    }  
    return JSON.parse(JSON.stringify(result));

}


function rightViewOfBST(root){


    let queue = [];
    let res = [];
    res.push([root,0]);
    queue.push([root,0]);
    let currentLevel;
    while(queue.length!==0){
        // let front = result.
        currentLevel = queue[0][1] ;
        if(root.children.length > 0){
            queue.push([root.children[0],currentLevel+1]);
            res.push([root.children[0],currentLevel+1]);
        
            if(root.children.length>1){
                queue.push([root.children[1],currentLevel+1]);
                res.push([root.children[1],currentLevel+1]);
                
            }    
        }
        if(queue.length>0){
            queue.shift();
            // console.log(queue);
            if(queue.length>0)
                root = queue[0][0];
        }else
            break;
    }
    currentLevel = res[res.length-1][1];
    result.push(res[res.length-1][0].name);
    for(let i=res.length-2;i>=0;i--){
        if(res[i][1]!=currentLevel){
            result.push(res[i][0].name);
            currentLevel = res[i][1];
        }
    }
    result.reverse();

}



export const rightView = (state,data) =>{


    result = [];
    // console.log(data);
    if(Object.keys(data).length > 0){
        rightViewOfBST(data);
        console.log(result);
    }  
    return JSON.parse(JSON.stringify(result));

}




export const levelorder = (state,data)=>{

    result = [];
    // console.log(data);
    if(Object.keys(data).length > 0){
        levelorderTraversal(data);
        console.log(result);
    }  
    return JSON.parse(JSON.stringify(result));
}

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
    if(Object.keys(data).length > 0){
        preorderTraversal(data);
        console.log(result);
    }   
    return JSON.parse(JSON.stringify(result));

}

export const postorder = (state,data)=>{

    result = [];
    // console.log(state);
    if(Object.keys(data).length > 0){
        postorderTraversal(data);
        console.log(result);
    }   
    return JSON.parse(JSON.stringify(result));

}
