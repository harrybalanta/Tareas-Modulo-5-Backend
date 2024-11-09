const esperarSegundos = async (segundos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Tiempo de espera son, ${segundos} segundos.`);
      resolve();
    }, segundos * 1000);
  });
};

export default esperarSegundos;

  
  