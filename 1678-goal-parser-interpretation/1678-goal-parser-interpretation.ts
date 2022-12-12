function interpret(command: string): string {
    let concatString = [];
    
    for(let i = 0; i < command.length; i++) {
        if(command[i] === "G") {
            concatString.push(command[i])
        }

        if(command[i] === "(" && command[i + 1] === ")") {
            concatString.push("o")
        }

        if(command[i] === "(" && command[i + 1] === "a" && command[i + 2] === "l" &&       command[i + 3] === ")") {
            concatString.push("al")
        }
    }
    
    return concatString.join('');
};