const Reader = require ('../../../lib/utils/Reader')
const ExplorerService = require('../../../lib/services/ExplorerService');

describe('Unit test for ExplorerService class', () => {
    // La constante se pone de forma general para que pueda ser utilizado por todos los test
    const explorers = Reader.readJsonFile('explorers.json');
    
    test('1) Filter explorer for mission node', () => {
        const explorerFilter = ExplorerService.filterByMission (explorers, "node");
        
        expect (explorerFilter.length).toBe(10);
    });

    test('2) Get amount of explorers by mission node', () => {
        const getExplorerByMission = ExplorerService.getAmountOfExplorersByMission (explorers, "node");
        
        // 1. Con esta opción, en el método original al return concatenamos "length" para obtener el número de explorers en node
        expect(getExplorerByMission).toBe(10);

        // 2. Con esta opción, en el método original en la parte del return se regresaria solo la constante, entonces nos regresaría una lista de objetos y para que la prueba sea correcta en los puntos suspensivos se tendría que poner la misma lista de objetos
        // expect(getExplorerByMission).toEqual([{...}]);
    });

    test('3) Get explorers usernames by mission node', () => {
    
        const explorerUsernameByMission = ExplorerService.getExplorersUsernamesByMission (explorers, "node");

        expect(explorerUsernameByMission).toEqual([
        'ajolonauta1',
        'ajolonauta2',
        'ajolonauta3',
        'ajolonauta4',
        'ajolonauta5',
        'ajolonauta11',
        'ajolonauta12',
        'ajolonauta13',
        'ajolonauta14',
        'ajolonauta15'])
    });
})