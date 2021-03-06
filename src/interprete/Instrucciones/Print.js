class Print extends Instruction{
    
    constructor(expression, row, column){
        super(row, column);
        this.expression = expression;
    }

    interpretar(tree, table){
        var concatenacion = "";
        for (var expression of this.expression) {
            var value = expression.interpretar(tree, table);
            if(value instanceof Exception) return value;
            if(value == null){
                var symbol = table.getTabla(expression.parameters[0].identificador);
                var result = Object.values(symbol.value);
                var texto = '(';
                texto += this.recorrerStruct(result).toString();
                value = texto;
                concatenacion += value;
            }else{
                if (value.typeArray == Tipo.ARRAY && !(value instanceof DeclaracionArray) && !(value instanceof Array)) {
                    //value = this.recorrerArray(value.list_value);
                    
                    try {
                        value = value.value;
                        concatenacion += value;
                    } catch (error) {
                        value = new Exception("semático", "Index malo", this.row, this.column);
                        concatenacion += value;
                    }
                }else if (value.typeArray == Tipo.ARRAY && (value instanceof Array)) {
                    value = this.recorrerArray(value);
                    concatenacion += value;
                }else if (value.typeArray == Tipo.ARRAY && value.typeArray == Tipo.ARRAY) {
                    value = this.recorrerArray(value.list_value);
                    concatenacion += value;
                }else if (value instanceof Primitivo) {
                    value = value.value;
                    concatenacion += value;
                }else{
                    concatenacion += value;
                }
            }
        }
       
        tree.updateConsola(concatenacion);
    }

    recorrerArray(listaValores){
        var aux = [];
        for(var temp of listaValores){
            if (temp instanceof Array) {
                aux.push(this.recorrerArray(temp));
            }else{
                aux.push(temp.value);
            }
        }
        return "["+aux.toString()+"]";
    }

    recorrerStruct(listStruct){
        var texto = '';
        var i = 0;
        while(i<listStruct.length){
            if(listStruct[i] instanceof Object){
                // here code..
                texto += `(${this.recorrerStruct(Object.values(listStruct[i]))})`
            }else{
                if((i+1) == listStruct.length){
                    texto += `${listStruct[i].toString()})`
                }else{
                    texto += `${listStruct[i].toString()},`
                }
            
            }
            i++;
        }
        console.log(texto)
        return texto;
    }

    getNodo(){
        var nodo = new NodoAST("PRINT");
        for (var expresion of this.expression) {
            nodo.agregarHijoNodo(expresion.getNodo());
        }
        return nodo;
    }

    
    compilar(tree, table){
        var gen = tree.getGenerator();
        for(var value of this.expression){
            var result = value.compilar(tree, table);
            if(value instanceof Exception) return result;
            var op = '';
            var type = '';

            if(result.type == Tipo.ENTERO){
                op = 'd';
                type = 'int';
            }else if(result.type == Tipo.DECIMAL){
                // here code...
                op = 'f';
                type = 'double';
            }else if(result.type == Tipo.CARACTER){
                // here code...
                op = 'c';
                type = 'char';
            }
                
                
            if(result.type == Tipo.BOOLEANO){
                var newL = gen.getLabel();
                tree.updateConsola(gen.setBoolean(result.EV, result.EF, null, newL, true)+'\n');
            
            }else if(result.type == Tipo.STRING || result.type == Tipo.CARACTER){

                if(!tree.nativas){
                    gen.setNative(gen.getPrintfString());
                    tree.nativas = true;
                }
                var temp = gen.newTemp();
                var conca = '';
                conca += gen.setArithmetic(temp, 'P', '+', tree.getPos()); // editar a futuro el pos
                conca += gen.setArithmetic(temp, temp, '+', '1');
                conca += gen.setStack(temp, result.value);
                conca += gen.setArithmetic('P', 'P', '+', tree.getPos()); // editar a futuro el pos
                conca += '\tprintfString();\n';
                temp = gen.newTemp();
                conca += gen.setArithmetic(temp,'stack[(int)P]','','');
                conca += gen.setArithmetic('P', 'P', '-', tree.getPos()); // // editar a futuro el pos
                conca += '\n';
                
                tree.updateConsola(conca);
                

            }else{
                tree.updateConsola(gen.setPrintf(op, type, result.value, false)+'\n');
            }
    

        }

        tree.updateConsola(gen.newLine(false));
        
    }
}