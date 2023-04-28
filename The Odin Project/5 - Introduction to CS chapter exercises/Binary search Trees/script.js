class Node{
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(array){
        this.root = this.buildTree(array)
    }
    buildTree(array){
        let treeElements = [...new Set(array)].sort(function(a, b){return a-b})
        let treeElementsCopy = treeElements
        if(treeElements.length == 1){
            let node = new Node(treeElements[0])
            return node
        }else if(treeElements.length == 0){
            return null
        }

        let half = Math.round(treeElements.length/2)-1
        let middleElement = treeElements[half]
        let leftArray = treeElementsCopy.splice(0,half)
        let rightArray = treeElementsCopy.splice(1)
        let newNode = new Node(middleElement)
        newNode.left = this.buildTree(leftArray)
        newNode.right = this.buildTree(rightArray)
        if(!this.root){
            this.root = newNode
        }
        return newNode
    }
    insert(value, node = this.root){
        if(node === null){ 
            return new Node(value)
        }
        if(value > node.data)
            node.right = this.insert(value, node.right)
        else if (value < node.data)
            node.left = this.insert(value, node.left)
        return node
    }
    delete(value, node = this.root){
        if(node.null === null) return node
        if(value > node.data){
            node.right = this.delete(value, node.right)
        }else if(value < node.data){
            node.left = this.delete(value, node.left)
        }else{
            if(node.left === null){
                return node.right
            }else if(node.right === null){
                return node.left
            }

            node.data = this.findNextRight(node).data
            node.right = this.delete(node.data, node.right)
            return node
        }
        return node
        
    }
    find(value, node=this.root){
        if(node.data === value){return node}
        if(value > node.data){
            node = this.find(value, node.right)
        }else if(value < node.data){
            node = this.find(value, node.left)
        }
        return node
    }

    findNextRight(node){
        node = node.right
        while(node.left){
            node = node.left
        }
        return node
    }
    
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
     return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}
let tree = new Tree([10,20,30,40,50,60,70,80,90,100])
prettyPrint(tree.root)
/*
for (let index = 0; index < 100; index++) {
    tree.insert(Math.round(Math.random()*1000))
    //tree.insert(index)
}
*/
//tree.insert(55)
//tree.delete(20)
prettyPrint(tree.root)
//console.log(tree.search(12).node)

                    

  
                  