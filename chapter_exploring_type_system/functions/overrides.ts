function añadir(x: string, y: string): string;
function añadir(x: number, y: number): number;
function añadir(x: any, y: any) {
  return x + y;
}

añadir(1, 3);
añadir("🕷️", "🕸️");
añadir(1, "🕷️");
