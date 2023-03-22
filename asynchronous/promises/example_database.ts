interface IConexion {
  servidor: string;
  puerto: string;
}

interface IError {
  codigo: number;
  mensaje: string;
}

interface IFilaData {
  id: string;
  genus: string;
  especie: string;
  reino: string;
}

function intentarConexion(conexion: IConexion): Promise<IFilaData> {
  return new Promise(
    (resolve: (data: IFilaData) => void, reject: (error: IError) => void) => {
      // intentar conexión
      // si falla
      // hacer algo con la conexión
      console.log(`Conectando a: ${conexion.puerto} ⚠️`);
      const failed = true;
      if (failed) {
        reject({
          codigo: 3002,
          mensaje: `Embeces la vida no es como queremos 🐭🤠`,
        });
      }
      resolve({
        id: `🪪`,
        especie: "P. onca",
        genus: "Panthera",
        reino: "animal",
      });
    }
  );
}
