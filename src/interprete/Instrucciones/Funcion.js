class Funcion extends Instruction{
    constructor(type, id, parameters, instr, row, column){
        super(row, column);
        this.id = id;
        this.parameters = parameters;
        this.instructions = instr;
        this.type = type;
        this.table = null;
    }

    interpretar(tree, table){
        this.table = table;
        var countReturn = 0;
        var newTable = new TablaSimbolo(table);
        for(var instr of this.instructions){
            var value = instr.interpretar(tree, newTable);
            if (value instanceof Exception) {
                tree.getException().push(value);
                tree.updateConsola(value.toString());
            }
            if (value instanceof Break) {
                var err = new Exception("Semantico", "Sentencia BREAK fuera de ciclo.", instr.row, instr.column)
                tree.getException().push(err);  //guardar el error para seguir con las demas instrucciones
                tree.updateConsola(err.toString());
            }
            if (value instanceof Return) {
                if (this.type == value.type) {
                    return value.result;
                }else if (this.type == Tipo.VOID) {
                    return null;
                }
                else{
                    countReturn += 1;
                    var err = new Exception("Semantico", "Tipo de retorno invalido.", instr.row, instr.column)
                    tree.getException().push(err);  //guardar el error para seguir con las demas instrucciones
                    tree.updateConsola(err.toString());
                }
            }
            if (value instanceof Continue) {
                var err = new Exception("Semantico", "Sentencia CONTINUE fuera de ciclo.", instr.row, instr.column)
                tree.getException().push(err);  //guardar el error para seguir con las demas instrucciones
                tree.updateConsola(err.toString());
            }
        }
        if (countReturn == 0 && this.type != Tipo.VOID) {
            return new Exception("Semantico", "Necesita retornar un valor", instr.row, instr.column)
        }
        return null;
    }

    getNodo(){
        var nodo = new NodoAST("FUNCION");
        nodo.agregarHijo(this.id.toString());
        var parametros = new NodoAST("PARAMETROS");
        for (var param of this.parameters) {
            var parametro = new NodoAST("PARAMETROS");
            parametro.agregarHijo(param['tipo'])
            parametro.agregarHijo(param['identificador'])
            parametros.agregarHijoNodo(parametro);
        }
        nodo.agregarHijoNodo(parametros);
        return nodo;
    }
}