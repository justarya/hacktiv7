function generate() {
    let randomize = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let code = '';
    for (let i = 0; i < 10; i++) {
        code += randomize[Math.floor(Math.random()*randomize.length)]
    }
    return code
}

console.log(generate())
