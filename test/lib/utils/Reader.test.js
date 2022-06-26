const Reader = require('../../../lib/utils/Reader');

describe('Test for Reader', () => {
    // ! nota: La clase 'Reader' esta al mismo nivel que el archivo 'explorer.json' por eso solo se pone entre comillas
    const explorers = Reader.readJsonFile('explorers.json');

    test('1. Obtener el tamaño de la lista de explorers', () => {
        expect(explorers.length).toBe(15);
    }) 
    
    test('2. Coincidir el nombre del explorer con su respectiva posición ', () => {
        expect(explorers[1].name).toEqual("Woopa2");
    }) 
})