class ListBinding{
    constructor(listElement){
        this.listElement = listElement; //ul DOM element
        this.listItems = [];
    }

    static createListItem(value){
        const li = document.createElement('li');  // Create DOM element: <li></li>
        li.textContent = value;
        return li;
    }

    addItem(value){
        this.listItems.push(value);
        this.updateList();
    }

    removeItem(index){
        this.listItems.splice(index, 1);
        this.updateList();
    }

    updateList(){

        // Clear existing list DOM
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // Manipulate new list DOM
        for(const item of this.listItems){
            this.listElement.appendChild(ListBinding.createListItem(item));
        }
    }
}