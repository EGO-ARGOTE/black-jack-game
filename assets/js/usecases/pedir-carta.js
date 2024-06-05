
  //Funcion para tomar una carta

  /**
   * 
   * @param {Array<String} deck es un arreglo de string
   * @returns {String} retorna la carta del deck
   */

  
  export const pedirCarta = (deck) => {

    if ( !deck || deck.lenght === 0) {
      throw new Error ('No hay mas cartas');
    }

    const carta = deck.pop();
    return carta;

  }