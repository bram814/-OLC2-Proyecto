class Tan extends Instruction{
    
    constructor(id, parameters, instructions, row, column){
        super(row, column);
        this.id = id;
        this.type = null;
        this.parameters = parameters;
        this.instructions = instructions;
    }

    interpretar(tree, table){
        var symbol = table.getTabla("03-Native-Tan");
        
        if(symbol == null){
            return new Exception("Semantico", `La variable (${this.id}) no existe`, this.row, this.column);
        }

        if(symbol.getType() != Tipo.ENTERO && symbol.getType() != Tipo.DECIMAL){
            return new Exception("Semantico", `Tipo de dato de Tan no es un valor.`, symbol.getRow(), symbol.getColumn());
        }
        this.type = symbol.getType();
        return Math.tan(symbol.getValue());
    }
}