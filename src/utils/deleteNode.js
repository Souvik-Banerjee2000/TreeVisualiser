let isFound = true;


function findParent(greatest,root){

    // console.log(root);



    // if( root.children.length == 1 && root.attributes.left === '' && root.children[0].name === greatest.name)
    //     return root
    // else if(root.children.length >1 && root.children[1].name === greatest.name ) 
    //     return root;
    // else if(root.children.length == 1 && root.attributes.left === '')
    //     return findParent(root.children[0]);
    // else if(root.children.length >1)
    //     return findParent(root.children[1]);  
        

}

function findGreatest(root){

    if(root.attributes.right!==''){
        if(root.attributes.left!==''){
            return findGreatest(root.children[1]);
        }
        return findGreatest(root.children[0]);
    }
    return root;

}


function search(root,val){
    if(root.children[0].name === val){
        console.log(root.children);
        if(root.children[0].attributes.left === '' && root.children[0].attributes.right === ''){ //leaf node
            // console.log(root);
            if(root.attributes.left!==''){  //Target is the left child
                root.attributes.left = '';
            }else if(root.attributes.right!==''){ //Target is the right child
                root.attributes.right = '';
            }
            root.children.shift();
            // console.log(root);
        }else if(root.children[0].attributes.left === '' && root.children[0].attributes.right !== ''){
            // console.log(root);
            root.children[0] = root.children[0].children[0];
            // console.log(root);
        }else if(root.children[0].attributes.left !== ''){
            if(root.children[0].attributes.right === ''){
                root.children[0] = root.children[0].children[0];
            }
            else{
                console.log(root.children[0]);
                let greatest = findGreatest(root.children[0].children[0]);
                let parent = findParent(greatest,root.children[0].children[0]);
                console.log(greatest);
                console.log(parent);
            }


        }
    }else if(root.children.length > 1 && root.children[1].name === val){ 
        if(root.children[1].attributes.left === '' && root.children[1].attributes.right === ''){//leaf node
            root.attributes.right = '';
            root.children.pop();
        }
        else if(root.children[1].attributes.left === '' && root.children[1].attributes.right !== ''){
            // console.log(root.children[1]);
            root.children[1] = root.children[1].children[0];
            // console.log(root.children[1].children[0]);
        }
    }
    else if(root.name>val){
        if(root.attributes.left !== ""){
            search(root.children[0],val)
        }else{
            isFound = false;
        }
    }else if(root.name < val){
        if(root.attributes.right !== ""){
            if(root.children.length >1)
                search(root.children[1],val);
            else
                search(root.children[0],val);    
        }else{
            isFound = false;
        }
    }
}

export const deleteNode = (state,input)=>{

    // console.log(state);
    search(state,Number(input));
    if(isFound)
        return JSON.parse(JSON.stringify(state));
    else
        return state;    
    // console.log(state,Number(input));
 
    // if(!found)
    //     return state;
    // else return JSON.parse(JSON.stringify(state));
    // return state;
}