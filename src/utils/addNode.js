
// The tree consists of an children array , the first element of the array is the leftChild and the second element is the right child by default
function add(root,name){

    while(true){
        if(Number(root.name) > Number(name)){ 
            if(root.attributes.left === ''){   //If the left child of the particular node does not exists
                root.attributes.left = Number(name);
                // Push the node to the children's arrray of the parent node
                root.children.unshift({
                    name,
                    attributes:{
                        left:'',
                        right:''
                    },
                    children:[]
                })
                break;
            }else{
                // let attr = root.attributes.left;
                // if(root.children[0].name === attr){  //We don't know if the left child is in the first position or on the second position
                //     root = root.children[0];  
                // }else{
                //     root = root.children[1];
                // }
                setTimeout(()=>{
                    console.log("hello");
                    root = root.children[0];
                },10000)

                
            }
        }else{
            if(root.attributes.right === ''){   //If the right child of the particular node does not exists
                root.attributes.right = Number(name);
                // Push the node to the children's arrray of the parent node
                root.children.push({
                    name,
                    attributes:{
                        left:'',
                        right:''
                    },
                    children:[]
                })
                break;
            }else{
                
                if(root.attributes.left !== ''){
                    setTimeout(()=>{
                        console.log("hello");
                        root = root.children[1];
                    },10000)
                }else{
                    setTimeout(()=>{
                        console.log("hello");
                        root = root.children[0];
                    },10000)
                }
            }
        }
    }


}

export const addNode = (state,parentNode,name)=>{

    console.log(state,parentNode,name);

    if(Object.keys(state).length === 0){  //If there is no node in the tree that means the root node must be added
        return {
            name,
            attributes:{
                left:'',
                right:''
            },
            children:[]
        }
    }else{
        add(state,name);
        return JSON.parse(JSON.stringify(state));
    }


    // if(parentNode.name > name){
    //     parentNode.attributes.right = name; 
    // }else{
    //     parentNode.attributes.left = name;
    // }
//Check if one of it's child already exists
    // if(parentNode.children !== undefined){
    //     parentNode.children.push({
    //         name:name,
    //         attributes:{
    //             left:'',
    //             right:''
    //         }

    //     })
    // }else{
    //     parentNode.children = [{
    //         name:name,
    //         attributes:{
    //             left:'',
    //             right:''
    //         }    
    //     }]
    // }


}

