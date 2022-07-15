const { applyValidationInNumber } = require("../../../lib/services/FizzbuzzService");
const ExplorerValidation = require("../../../lib/services/FizzbuzzService");

describe("Pruebas de unidad para el método applyValidationInExplorer de la clase FizzbuzzService", () => {

    test("1) Validar la propiedad score % 3, si no hay residuo asignar a la propiedad trick FIZZ", () => {
        const explorer = {name: "Explorer", score: 3};
        const explorerFizz = ExplorerValidation.applyValidationInExplorer(explorer);

        expect(explorerFizz).toEqual({name: "Explorer", score: 3, trick: "FIZZ"});
    });

    test("2) Validar la propiedad score % 5, si no hay residuo asignar a la propiedad trick BUZZ", () => {
        const explorer = {name: "Explorer", score: 5};
        const explorerFizz = ExplorerValidation.applyValidationInExplorer(explorer);

        expect(explorerFizz).toEqual({name: "Explorer", score: 5, trick: "BUZZ"});
    });

    test("3) Validar la propiedad score % 5 && % 3, si no hay residuo asignar a la propiedad trick FIZZBUZZ", () => {
        const explorer15 = {name: "Explorer", score: 15};
        const explorerFizz = ExplorerValidation.applyValidationInExplorer(explorer15);

        expect(explorerFizz).toEqual({name: "Explorer", score: 15, trick: "FIZZBUZZ"});
    });

    test("4) Validar la propiedad score, si hay residuo asignar a la propiedad trick el valor del score", () => {
        const explorer1 = {name: "Explorer3", score: 1};
        const explorerFizzbuzz = ExplorerValidation.applyValidationInExplorer(explorer1);

        expect(explorerFizzbuzz).toEqual({ name: "Explorer3", score: 1, trick:1});
    }); 

    test('5) Validar el método applyValidationInNumber del nuevo requerimiento', () => {
        const explorer = 15;
        const validationInNumber = ExplorerValidation.applyValidationInNumber(explorer);
        expect (validationInNumber).toEqual("FIZZBUZZ")
    }) 
});