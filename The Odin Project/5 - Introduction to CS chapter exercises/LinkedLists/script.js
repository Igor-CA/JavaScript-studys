class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.listHead = null
    }
    append(value){
        let newNode = new Node(value)
        if(this.listHead === null){
            this.listHead = newNode
        }
        else{
            let currentNode = this.listHead
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
    }
    prepend(value){
        let newNode = new Node(value)
        newNode.next = this.listHead
        this.listHead = newNode
    }
    size(){
        if(this.listHead){
            let currentNode = this.listHead
            let value = 1
            while(currentNode.next){
                currentNode = currentNode.next
                value++
            }
            return value
        }
        return 0        
    }
    head(){
        if(this.listHead)return this.listHead.value
        return null
    }
    tail(){
        if(this.listHead){
            let currentNode = this.listHead
            while(currentNode.next){
                currentNode = currentNode.next
            }
            return currentNode.value
        }
        return null
    }
    at(desiredIndex){
        let currentNode = this.listHead
        for(let i = 0; i < desiredIndex; i++){
            currentNode = currentNode.next
            if(currentNode === null){
                break
            }
        }
        return currentNode
    }
    pop(){
        let currentNode = this.listHead
        for(let i=1; i < this.size() - 1; i++){
            currentNode = currentNode.next
        }
        currentNode.next = null
    }
    contains(value){
        if (this.listHead.value === value) return true 
        
        let currentNode = this.listHead
        for(let i=1; i < this.size(); i++){
            currentNode = currentNode.next
            if(currentNode.value === value){
                return true
            }
        }
        return false
    }
    find(value){
        if (this.listHead.value === value) return 0 
        
        let currentNode = this.listHead
        for(let i=1; i < this.size(); i++){
            currentNode = currentNode.next
            if(currentNode.value === value){
                return i
            }
        }
        return null
    }
    toString(){
        if(this.listHead){
            process.stdout.write(`(${this.listHead.value}) -> `)      
            let currentNode = this.listHead
            for(let i=1; i < this.size(); i++){
                currentNode = currentNode.next
                process.stdout.write(`(${currentNode.value}) -> `)
            }
            process.stdout.write('null\n')
        }
            
    }
    insertAt(value, index){
        let currentNode = this.listHead
        let lastNode 
        for(let i = 0; i < index; i++){
            lastNode = currentNode
            currentNode = currentNode.next
            if(currentNode === null){
                break
            }
        }

        let newNode = new Node(value)
        if(lastNode){
            lastNode.next = newNode
            newNode.next = currentNode
        }else{
            newNode.next = this.listHead
            this.listHead = newNode
        }  
    }
    removeAt(index){
        let currentNode = this.listHead
        let lastNode 
        for(let i = 0; i < index; i++){
            lastNode = currentNode
            currentNode = currentNode.next
            if(currentNode === null){
                break
            }
        }
        if(index > 0){
            lastNode.next = currentNode.next
        }else{
            this.listHead = currentNode.next
        }
    }
    remove(value){
        if(this.find(value))
            this.removeAt(this.find(value))
    }
}


