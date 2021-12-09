class Declaracion extends Instruction{

    constructor(type, id, expression=null, row, column){
        super(row, column)
        this.type = type;
        this.id = id;
        this.expression = expression;
    }

    interpretar(tree, table){
        var value = null;
     
        if (this.expression != null) {
            value = this.expression.interpretar(tree, table);  //obtenemos el valor de la expresion para asignarselo a la vatiable
            if (value instanceof Exception) return value;
            this.type = this.expression.type;

        }

        var simbolo = new Simbolo(this.id, this.type, this.row, this.column, value, "agregar ambito");
        var result = table.setTabla(simbolo);

        if (result instanceof Exception) return result;
        return null;
    }
}