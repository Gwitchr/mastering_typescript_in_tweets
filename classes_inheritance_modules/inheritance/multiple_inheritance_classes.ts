interface IBase1 {
  prop1: string;
}

interface IBase2 {
  prop2: string | null;
}

class ClassExtendida implements IBase1, IBase2 {
  prop1: "🌵";
  prop2: null;
}
