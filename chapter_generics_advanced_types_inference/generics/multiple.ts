function multiplesGenericos<A, B>(first: A, second: B) {
  console.log(`type of first: ${typeof first} ⚠️`);
  console.log(`type of second: ${typeof second} ⚠️`);
}

multiplesGenericos(1, "1");
multiplesGenericos<number, string>(1, "1");
