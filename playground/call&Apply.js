const obj = {
  name: 'Francisco',
  greet: function(age, mood) {
    const complementaryText = age && mood ? `, tenho ${age} anos e estou ${mood}!` : '';
    console.log(`Oies eu sou o ${this.name}${complementaryText}`);
  }
};

obj.greet();
obj.greet.call({ name: 'Chico' }, 27, 'puto');
obj.greet.apply({ name: 'Chiquinho'}, [27, 'feliz']);