class Default extends Instruction{

    constructor(instruction, row, column){
        super(row, column);
        this.instruction = instruction;
    }

    interpretar(tree, table){
        return null;
    }

    getInstruction(){ return this.instruction; }
    setInstruction(instruction){ this.instruction = instruction; }
}