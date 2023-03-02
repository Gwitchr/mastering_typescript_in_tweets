let no_type = "string";

console.log(`soy ${no_type} y no tengo tipado ⚠️`);

no_type = {
  i_have: "no type",
};

console.log(`soy ${no_type} y no tengo tipado ⚠️`);

no_type = function () {
  return "😜";
};

console.log(`soy ${no_type} y no tengo tipado ⚠️`);
