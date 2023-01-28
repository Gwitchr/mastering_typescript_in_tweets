function getNever(): never {
  while (true) {}
}

// unknown is the opposite of never

let un: unknown;
un = 1;

//no type can be assigned to never, never is assignable to all types.
let ha: never = getNever();

ha = 1;
const suave: string = ha;
