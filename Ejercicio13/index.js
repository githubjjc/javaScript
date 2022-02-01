const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true}
];

users.forEach(function (element) {
    if (element.premium===true){

    console.log('\x1b[31m%s\x1b[0m',element.username);
}
  });


UsuariosNoPremium = [];
users.forEach(function (UsuarioNoP) {
    if (UsuarioNoP.premium===false){
        const userNoPremium  = (UsuarioNoP.username);
		UsuariosNoPremium.push(userNoPremium);
        
}

  });
console.log(UsuariosNoPremium); 