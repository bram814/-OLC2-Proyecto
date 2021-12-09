/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,9],$V2=[1,11],$V3=[1,12],$V4=[1,13],$V5=[1,14],$V6=[1,15],$V7=[1,16],$V8=[1,17],$V9=[5,13,17,19,22,26,28,29,30,31,32],$Va=[2,9],$Vb=[1,21],$Vc=[1,33],$Vd=[1,38],$Ve=[1,31],$Vf=[1,32],$Vg=[1,34],$Vh=[1,35],$Vi=[1,36],$Vj=[1,37],$Vk=[1,39],$Vl=[1,40],$Vm=[1,41],$Vn=[5,12,13,17,19,22,26,27,28,29,30,31,32],$Vo=[5,12,13,17,19,22,26,28,29,30,31,32],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[1,54],$Vw=[1,55],$Vx=[1,56],$Vy=[1,57],$Vz=[1,58],$VA=[1,59],$VB=[1,60],$VC=[1,61],$VD=[1,62],$VE=[5,12,13,16,17,19,22,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48],$VF=[5,12,13,16,17,19,22,26,28,29,30,31,32,44,45],$VG=[1,87],$VH=[5,12,13,16,17,19,22,26,28,29,30,31,32,33,34,38,39,40,41,42,43,44,45,47,48],$VI=[5,12,13,16,17,19,22,26,28,29,30,31,32,38,39,40,41,42,43,44,45,47,48];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"init":3,"instrucciones":4,"EOF":5,"instruccion":6,"imprimir_instr":7,"fin_instr":8,"declaracion_instr":9,"asignacion_instr":10,"if_instr":11,"tk_puntocoma":12,"RPRINTLN":13,"tk_para":14,"expresion":15,"tk_parc":16,"RPRINT":17,"TIPO":18,"identificador":19,"tk_igual":20,"LISTA_ID":21,"RIF":22,"BLOCK_IF":23,"RELSE":24,"tk_llavea":25,"tk_llavec":26,"tk_coma":27,"RINT":28,"RDOUBLE":29,"RBOOLEAN":30,"RCHAR":31,"RSTRING":32,"tk_mas":33,"tk_menos":34,"tk_por":35,"tk_dividido":36,"tk_modulo":37,"tk_menorque":38,"tk_mayorque":39,"tk_menorigual":40,"tk_mayorigual":41,"tk_dobleigual":42,"tk_diferente":43,"tk_and":44,"tk_or":45,"tk_not":46,"tk_concatenacion":47,"tk_repeticion":48,"RENTERO":49,"RDECIMAL":50,"RCARACTER":51,"RCADENA":52,"RTRUE":53,"RFALSE":54,"RNULL":55,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"tk_puntocoma",13:"RPRINTLN",14:"tk_para",16:"tk_parc",17:"RPRINT",19:"identificador",20:"tk_igual",22:"RIF",24:"RELSE",25:"tk_llavea",26:"tk_llavec",27:"tk_coma",28:"RINT",29:"RDOUBLE",30:"RBOOLEAN",31:"RCHAR",32:"RSTRING",33:"tk_mas",34:"tk_menos",35:"tk_por",36:"tk_dividido",37:"tk_modulo",38:"tk_menorque",39:"tk_mayorque",40:"tk_menorigual",41:"tk_mayorigual",42:"tk_dobleigual",43:"tk_diferente",44:"tk_and",45:"tk_or",46:"tk_not",47:"tk_concatenacion",48:"tk_repeticion",49:"RENTERO",50:"RDECIMAL",51:"RCARACTER",52:"RCADENA",53:"RTRUE",54:"RFALSE",55:"RNULL"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,2],[6,1],[8,1],[8,0],[7,4],[7,4],[9,4],[9,2],[10,3],[11,5],[11,7],[11,7],[23,3],[21,3],[21,1],[18,1],[18,1],[18,1],[18,1],[18,1],[15,3],[15,3],[15,3],[15,3],[15,3],[15,2],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,2],[15,3],[15,3],[15,3],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1]; 
break;
case 2:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 3:
 this.$ = [$$[$0]]; 
break;
case 4: case 5: case 6: case 18:
 this.$ = $$[$0-1]; 
break;
case 7:
 this.$ = $$[$0]; 
break;
case 10:
 this.$ = new Println($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 11:
 this.$ = new Print($$[$0-1],   _$[$0-3].first_line, _$[$0-3].first_column);   
break;
case 12:
 this.$ = new Declaracion($$[$0-3], $$[$0-2], $$[$0],   _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 13:
 this.$ = new Declaracion($$[$0-1], $$[$0], null, _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 14:
 this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 15:
this.$ = new If($$[$0-2], $$[$0], null, null, _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 16:
this.$ = new If($$[$0-4], $$[$0-2], $$[$0], null,   _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 17:
this.$ = new If($$[$0-4], $$[$0-2], null, $$[$0],   _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 19:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2];
break;
case 20:
 this.$=[$$[$0]]; 
break;
case 21:
this.$ = Tipo.ENTERO;  
break;
case 22:
this.$ = Tipo.DECIMAL; 
break;
case 23:
this.$ = Tipo.BOOLEANO;
break;
case 24:
this.$ = Tipo.CARACTER;
break;
case 25:
this.$ = Tipo.STRING;  
break;
case 26:
this.$ = new Aritmetica($$[$0-2], $$[$0], Operador_Aritmetico.MAS,      _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 27:
this.$ = new Aritmetica($$[$0-2], $$[$0], Operador_Aritmetico.RESTA,    _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 28:
this.$ = new Aritmetica($$[$0-2], $$[$0], Operador_Aritmetico.POR,      _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 29:
this.$ = new Aritmetica($$[$0-2], $$[$0], Operador_Aritmetico.DIV,      _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 30:
this.$ = new Aritmetica($$[$0-2], $$[$0], Operador_Aritmetico.MODULO,   _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 31:
this.$ = new Aritmetica($$[$0], null, Operador_Aritmetico.UMENOS, _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 32:
this.$ = new Relacional($$[$0-2], $$[$0], Operador_Relacional.MENORQUE,   _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 33:
this.$ = new Relacional($$[$0-2], $$[$0], Operador_Relacional.MAYORQUE,   _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 34:
this.$ = new Relacional($$[$0-2], $$[$0], Operador_Relacional.MENORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 35:
this.$ = new Relacional($$[$0-2], $$[$0], Operador_Relacional.MAYORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 36:
this.$ = new Relacional($$[$0-2], $$[$0], Operador_Relacional.IGUALACION, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 37:
this.$ = new Relacional($$[$0-2], $$[$0], Operador_Relacional.DIFERENCIA, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 38:
this.$ = new Logica($$[$0-2], $$[$0], Operador_Logico.AND,   _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 39:
this.$ = new Logica($$[$0-2], $$[$0], Operador_Logico.OR,    _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 40:
this.$ = new Logica($$[$0], null, Operador_Logico.NOT, _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 41:
this.$ = new Operador($$[$0-2], $$[$0], Operador_Cadena.CONCATENACION, _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 42:
this.$ = new Operador($$[$0-2], $$[$0], Operador_Cadena.REPETICION,    _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 43:
this.$ = $$[$0-1]
break;
case 44:
this.$ = new Primitivo(Tipo.ENTERO,   $$[$0],    _$[$0].first_line, _$[$0].first_column);    
break;
case 45:
this.$ = new Primitivo(Tipo.DECIMAL,  $$[$0],    _$[$0].first_line, _$[$0].first_column);    
break;
case 46:
this.$ = new Primitivo(Tipo.CARACTER, $$[$0].slice(1,-1),    _$[$0].first_line, _$[$0].first_column);    
break;
case 47:
this.$ = new Primitivo(Tipo.STRING,   $$[$0],    _$[$0].first_line, _$[$0].first_column);    
break;
case 48:
this.$ = new Identificador(           $$[$0],    _$[$0].first_line, _$[$0].first_column);    
break;
case 49:
this.$ = new Primitivo(Tipo.BOOLEANO, true,  _$[$0].first_line, _$[$0].first_column);    
break;
case 50:
this.$ = new Primitivo(Tipo.BOOLEANO, false, _$[$0].first_line, _$[$0].first_column);    
break;
case 51:
this.$ = new Primitivo(Tipo.NULO,     "null",  _$[$0].first_line, _$[$0].first_column);    
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,13:$V0,17:$V1,18:10,19:$V2,22:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:$V8},{1:[3]},{5:[1,18],6:19,7:4,9:5,10:6,11:7,13:$V0,17:$V1,18:10,19:$V2,22:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:$V8},o($V9,[2,3]),o($V9,$Va,{8:20,12:$Vb}),o($V9,$Va,{8:22,12:$Vb}),o($V9,$Va,{8:23,12:$Vb}),o($V9,[2,7]),{14:[1,24]},{14:[1,25]},{19:[1,26],21:27},{20:[1,28]},{14:[1,29]},{19:[2,21]},{19:[2,22]},{19:[2,23]},{19:[2,24]},{19:[2,25]},{1:[2,1]},o($V9,[2,2]),o($V9,[2,4]),o($V9,[2,8]),o($V9,[2,5]),o($V9,[2,6]),{14:$Vc,15:30,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:42,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},o($Vn,[2,20],{20:[1,43]}),o($Vo,[2,13],{27:[1,44]}),{14:$Vc,15:45,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:46,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{16:[1,47],33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,45:$VB,47:$VC,48:$VD},{14:$Vc,15:63,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:64,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:65,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},o($VE,[2,44]),o($VE,[2,45]),o($VE,[2,46]),o($VE,[2,47]),o($VE,[2,48]),o($VE,[2,49]),o($VE,[2,50]),o($VE,[2,51]),{16:[1,66],33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,45:$VB,47:$VC,48:$VD},{14:$Vc,15:67,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{19:[1,68]},o($Vo,[2,14],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,45:$VB,47:$VC,48:$VD}),{16:[1,69],33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,45:$VB,47:$VC,48:$VD},o($Vo,[2,10]),{14:$Vc,15:70,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:71,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:72,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:73,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:74,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:75,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:76,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:77,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:78,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:79,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:80,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:81,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:82,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:83,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},{14:$Vc,15:84,19:$Vd,34:$Ve,46:$Vf,49:$Vg,50:$Vh,51:$Vi,52:$Vj,53:$Vk,54:$Vl,55:$Vm},o($VE,[2,31]),o($VF,[2,40],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,47:$VC,48:$VD}),{16:[1,85],33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,45:$VB,47:$VC,48:$VD},o($Vo,[2,11]),o($Vo,[2,12],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,45:$VB,47:$VC,48:$VD}),o($Vn,[2,19]),{23:86,25:$VG},o($VH,[2,26],{35:$Vr,36:$Vs,37:$Vt}),o($VH,[2,27],{35:$Vr,36:$Vs,37:$Vt}),o($VE,[2,28]),o($VE,[2,29]),o($VE,[2,30]),o($VI,[2,32],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt}),o($VI,[2,33],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt}),o($VI,[2,34],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt}),o($VI,[2,35],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt}),o($VI,[2,36],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt}),o($VI,[2,37],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt}),o($VF,[2,38],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,47:$VC,48:$VD}),o([5,12,13,16,17,19,22,26,28,29,30,31,32,45],[2,39],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,44:$VA,47:$VC,48:$VD}),o([5,12,13,16,17,19,22,26,28,29,30,31,32,44,45,47],[2,41],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz,48:$VD}),o([5,12,13,16,17,19,22,26,28,29,30,31,32,44,45,47,48],[2,42],{33:$Vp,34:$Vq,35:$Vr,36:$Vs,37:$Vt,38:$Vu,39:$Vv,40:$Vw,41:$Vx,42:$Vy,43:$Vz}),o($VE,[2,43]),o($V9,[2,15],{24:[1,88]}),{4:89,6:3,7:4,9:5,10:6,11:7,13:$V0,17:$V1,18:10,19:$V2,22:$V3,28:$V4,29:$V5,30:$V6,31:$V7,32:$V8},{11:91,22:$V3,23:90,25:$VG},{6:19,7:4,9:5,10:6,11:7,13:$V0,17:$V1,18:10,19:$V2,22:$V3,26:[1,92],28:$V4,29:$V5,30:$V6,31:$V7,32:$V8},o($V9,[2,16]),o($V9,[2,17]),o([5,13,17,19,22,24,26,28,29,30,31,32],[2,18])],
defaultActions: {13:[2,21],14:[2,22],15:[2,23],16:[2,24],17:[2,25],18:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/*Comentario de una linea*/
break;
case 2:// comentario multiple líneas
break;
case 3:return 13;
break;
case 4:return 17;
break;
case 5:return 22;
break;
case 6:return 24;
break;
case 7:return 'RSWITCH';
break;
case 8:return 'RCASE';
break;
case 9:return 'RDEFAULT';
break;
case 10:return 'RPOW';
break;
case 11:return 'RSQRT';
break;
case 12:return 'RSIN';
break;
case 13:return 'RCOS';
break;
case 14:return 'RTAN';
break;
case 15:return 'RLOG10';
break;
case 16:return 'RBREAL';
break;
case 17:return 'RWHILE';
break;
case 18:return 'RDO';
break;
case 19:return 'RCONTINUE';
break;
case 20:return 'REND';
break;
case 21:return 'RSTRUCT';
break;
case 22:return 55;
break;
case 23:return 28;
break;
case 24:return 29;
break;
case 25:return 30;
break;
case 26:return 53;
break;
case 27:return 54;
break;
case 28:return 31;
break;
case 29:return 32;
break;
case 30:return 50;
break;
case 31:return 49;
break;
case 32:return 51;
break;
case 33:return 19;
break;
case 34:return 'tk_dospuntos';
break;
case 35:return 12;
break;
case 36:return 25;
break;
case 37:return 26;
break;
case 38:return 'tk_cora';
break;
case 39:return "tk_corc"
break;
case 40:return 14;
break;
case 41:return 16;
break;
case 42:return 47;
break;
case 43:return 12;
break;
case 44:return 'tk_dolar';
break;
case 45:return 27;
break;
case 46:return 'tk_masmas';
break;
case 47:return 'tk_menosmenos';
break;
case 48:return 'tk_numeral';
break;
case 49:return 'tk_interrogacion';
break;
case 50:return 48;
break;
case 51:return 33;
break;
case 52:return 34;
break;
case 53:return 35;
break;
case 54:return 36;
break;
case 55:return 37;
break;
case 56:return 43;
break;
case 57:return 40;
break;
case 58:return 41;
break;
case 59:return 38;
break;
case 60:return 39;
break;
case 61:return 42;
break;
case 62:return 20;
break;
case 63:return 44
break;
case 64:return 45;
break;
case 65:return 46;
break;
case 66:cadena="";this.begin("string");
break;
case 67:cadena+=yy_.yytext;
break;
case 68:cadena+="\"";
break;
case 69:cadena+="\n";
break;
case 70:cadena+=" ";
break;
case 71:cadena+="\t";
break;
case 72:cadena+="\\";
break;
case 73:cadena+="\'";
break;
case 74:yy_.yytext=cadena; this.popState(); return 52;
break;
case 75:return 5;
break;
case 76: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:println\b)/i,/^(?:print\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:pow\b)/i,/^(?:sqrt\b)/i,/^(?:sin\b)/i,/^(?:cos\b)/i,/^(?:tan\b)/i,/^(?:log10\b)/i,/^(?:break\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:continue\b)/i,/^(?:begin\b)/i,/^(?:struct\b)/i,/^(?:null\b)/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:char\b)/i,/^(?:String\b)/i,/^(?:[0-9]+(\.[0-9]+)+\b)/i,/^(?:[0-9]+\b)/i,/^(?:'([^\\\"]|\\.)')/i,/^(?:([a-zA-Z])([a-zA-Z0-9_])*)/i,/^(?::)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\()/i,/^(?:\))/i,/^(?:&)/i,/^(?:;)/i,/^(?:\$)/i,/^(?:,)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:#)/i,/^(?:\?)/i,/^(?:\^)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:!=)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:==)/i,/^(?:=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:["])/i,/^(?:[^"\\]+)/i,/^(?:\\")/i,/^(?:\\n)/i,/^(?:\s)/i,/^(?:\\t)/i,/^(?:\\\\)/i,/^(?:\\\\')/i,/^(?:["])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"string":{"rules":[67,68,69,70,71,72,73,74],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,75,76],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}