class ToInt extends Instruction{
    
    constructor(id, parameters, instructions, row, column){
        super(row, column);
        this.id = id;
        this.type = null;
        this.parameters = parameters;
        this.instructions = instructions;
        this.symbol = null;
    }

    interpretar(tree, table){
        var symbol = table.getTabla("09-Native-ToInt");
        if(symbol == null){
            return new Exception("Semantico", `La variable (${this.id}) no existe`, this.row, this.column);
        }

        if(symbol.getType() != Tipo.ENTERO && symbol.getType() != Tipo.DECIMAL){
            return new Exception("Semantico", `Tipo de dato de ToInt no es un valor.`, symbol.getRow(), symbol.getColumn());
        }
        this.type = Tipo.ENTERO;
        this.symbol = symbol;
        return parseInt(symbol.getValue());
    }

    getNodo(){
        var nodo = new NodoAST("TO-INT");
        var nodoDato = new NodoAST(this.type);
        nodoDato.agregarHijo(this.symbol.getValue().toString());
        nodo.agregarHijoNodo(nodoDato);
        return nodo;
    }
}