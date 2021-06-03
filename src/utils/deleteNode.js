
import {inorder} from "./traversals";
let isFound = true;


function findGreatest(root,parent){

    if(root.attributes.right!==''){
        if(root.attributes.left!==''){
            parent = root;
            return findGreatest(root.children[1],parent);
        }
        parent = root;
        return findGreatest(root.children[0],parent);
    }
    return [root,parent];

}


function del(root,val){
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
        }else if(root.children[0].attributes.left === '' && root.children[0].attributes.right !== ''){ //left does not exist but right do
            // console.log(root);
            root.children[0] = root.children[0].children[0];
            // console.log(root);
        }else if(root.children[0].attributes.left !== ''){
            if(root.children[0].attributes.right === ''){
                root.children[0] = root.children[0].children[0];
            }
            else{
                // console.log(root.children[0]);
                let [greatest,parent] = findGreatest(root.children[0].children[0],root.children[0]);
                // let parent = findParent(greatest,root.children[0].children[0]);

                console.log(greatest,parent);

                if(parent !== root.children[0]){
                    parent.attributes.right = greatest.attributes.left;
                    let v = greatest.children;
                    console.log(v);
                    parent.children.pop();
                    parent.children.push(...v);
                }else{
                    parent.attributes.left = greatest.attributes.left;
                    let v = greatest.children;
                    parent.children.shift();
                    parent.children.unshift(...v);
                }


                root.children[0].name = greatest.name;


                // console.log("Hello");
                // console.log(state);
                
                
                // parent.children[1] = greatest.children[0];
                // console.log(greatest);
                // console.log(parent);
            }


        }
    }else if(root.children.length > 1 && root.children[1].name === val){ 
        if(root.children[1].attributes.left === '' && root.children[1].attributes.right === ''){//leaf node
            root.attributes.right = '';
            root.children.pop();
        }
        else if(root.children[1].attributes.left === '' && root.children[1].attributes.right !== ''){ //left does not exist but right do
            
            root.children[1] = root.children[1].children[0];
            
        }
        else if(root.children[1].attributes.left !== ''){ //left exists
            if(root.children[1].attributes.right === ''){ //right does not
                root.children[1] = root.children[1].children[0];
            }
            else{ //right also exists with left


                let [greatest,parent] = findGreatest(root.children[1].children[0],root.children[1]);
                
                if(parent !== root.children[1]){
                    parent.attributes.right = greatest.attributes.left;
                    let v = greatest.children;
                    console.log(v);
                    parent.children.pop();
                    parent.children.push(...v);
                }else{
                    parent.attributes.left = greatest.attributes.left;
                    let v = greatest.children;
                    parent.children.shift();
                    parent.children.unshift(...v);
                }
                root.children[1].name = greatest.name;
            }

        }
    }
    else if(root.name>val){
        if(root.attributes.left !== ""){
            del(root.children[0],val)
        }else{
            isFound = false;
        }
    }else if(root.name < val){
        if(root.attributes.right !== ""){
            if(root.children.length >1)
                del(root.children[1],val);
            else
                del(root.children[0],val);    
        }else{
            isFound = false;
        }
    }
}

export const deleteNode = (state,input)=>{

    // console.log(state);
    console.log(inorder(state,state));
    let r = inorder(state,state);
    if(r.indexOf(Number(input)) === -1){
        isFound = false;
    }else{
        if(Number(state.name) === Number(input)){
            if(state.attributes.left === '' && state.attributes.right === ''){
                return {};
            } 
            else if(state.attributes.left === '' && state.attributes.right!==''){
                // console.log(state.children);
                state = state.children[0];    
                // console.log(state.children);
            }else if(state.attributes.left!==''){
                if(state.attributes.right === ''){
                    // console.log(state.children);
                    state = state.children[0];
                    // console.log(state.children);
                }else{
                    let [greatest,parent] = findGreatest(state.children[0],state);
                    // let parent = findParent(greatest,root.children[0].children[0]);
    
                    console.log(greatest,parent);
    
                    if(parent !== state){
                        parent.attributes.right = greatest.attributes.left;
                        let v = greatest.children;
                        console.log(v);
                        parent.children.pop();
                        parent.children.push(...v);
                    }else{
                        parent.attributes.left = greatest.attributes.left;
                        let v = greatest.children;
                        parent.children.shift();
                        parent.children.unshift(...v);
                    }
    
    
                    state.name = greatest.name;
    
                }
            }
    
        }else{
            del(state,Number(input));
        }

    }


    if(isFound)
        return JSON.parse(JSON.stringify(state));
    else
        return state;    
 
}