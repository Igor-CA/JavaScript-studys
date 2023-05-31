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
    
    height(node){
        if(node === null)
            return 0
        let leftHeight = this.height(node.left)
        let rightHeight = this.height(node.right)
        return (leftHeight > rightHeight)? leftHeight+1 : rightHeight+1
    }

    depth(node){
        let currentNode = this.root
        let depth = 1
        while(currentNode !== node)
        if(node.data > currentNode.data){
            currentNode = currentNode.right
            depth++
        }else if(node.data < currentNode.data){
            currentNode = currentNode.left
            depth++
        }
        return depth
    }
    levelOrder(iteratorFunction = console.log){
        let queueArray = [this.root]
        let currentNode = this.root
        while(currentNode){
            iteratorFunction(currentNode)
            if(currentNode.left)
                queueArray.push(currentNode.left)
            if(currentNode.right)
                queueArray.push(currentNode.right)
            queueArray.shift()
            currentNode = queueArray[0]
        }
        
    }
    preorder(iteratorFunction, node=this.root){
        if(node === null) return node
        iteratorFunction(node)
        //console.log(node)
        this.preorder(iteratorFunction, node.left)
        this.preorder(iteratorFunction, node.right)
        return node
    }
    
    inorder(iteratorFunction, node=this.root){
        if(node === null) return node
        this.inorder(iteratorFunction, node.left)
        iteratorFunction(node)
        //console.log(node)
        this.inorder(iteratorFunction, node.right)
        return node
    }
    postorder(iteratorFunction, node=this.root){
        if(node === null) return node
        this.postorder(iteratorFunction, node.left)
        this.postorder(iteratorFunction, node.right)
        iteratorFunction(node)
        //console.log(node)
        return node
    }
    
    isBalanced(node=this.root){
        if(node === null) return true
        let leftHeight = this.height(node.left)
        let rightHeight = this.height(node.right)
        let heightDifference = Math.abs(leftHeight - rightHeight)
        if(heightDifference > 1){
            return false
        }else if(this.isBalanced(node.right) && this.isBalanced(node.left)){
            return true
        }
        return false
    }

    rebalance(){
        let elementsArray = []
        this.inorder((element) => {
            elementsArray.push(element.data)
        })
        this.root = this.buildTree(elementsArray)
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