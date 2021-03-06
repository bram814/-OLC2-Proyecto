const Tipo = {

    ENTERO        : 1,
    DECIMAL       : 2,
    STRING        : 3,
    BOOLEANO      : 4,
    CARACTER      : 5,
    IDENTIFICADOR : 6,
    NULO          : 7,
    ARRAY         : 8,
    STRUCT        : 9,
    VOID          : 10,
}

const Operador_Aritmetico = {

    MAS    : 1,
    RESTA   : 2,
    POR     : 3,
    DIV     : 4,
    UMENOS  : 5,
    MODULO  : 6,
}

const Operador_Relacional = {
    
    MAYORQUE   : 1,
    MENORQUE   : 2,
    MAYORIGUAL : 3,
    MENORIGUAL : 4,
    IGUALACION : 5,
    DIFERENCIA : 6,
}

const Operador_Logico = {

    OR  : 1,
    AND : 2,
    NOT : 3,
}

const Operador_Cadena = {
    
    CONCATENACION : 1,
    REPETICION    : 2,
}