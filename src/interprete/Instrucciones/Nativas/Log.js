class Log extends Instruction{
    
    constructor(row, column){
        super(row, column);
    }

    interpretar(tree, table){
        return this;
    }

    getNodo(){
        var nodo = new NodoAST("LOGARITMO");
        return nodo;
    }
}