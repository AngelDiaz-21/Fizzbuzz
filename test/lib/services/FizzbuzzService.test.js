const Reader = require ('../../../lib/utils/Reader');
const ExplorerValidation = require('../../../lib/services/FizzbuzzService');

describe('Unit test for FizzbuzzService class ', () => {
    test('Apply validation in explorer score', () => {
        const explorers = Reader.readJsonFile('explorers.json');

        const explorer1 = {name: "Explorer3", score: 5}
        const explorerFizzbuzz = ExplorerValidation.applyValidationInExplorer(explorer1)

        expect(explorerFizzbuzz).toEqual({ name: 'Explorer3', score: 5, trick:'BUZZ'})
    }) 
})