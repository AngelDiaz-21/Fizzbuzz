const ExplorerValidation = require("../../../lib/services/FizzbuzzService");

describe("Pruebas de unidad para el método applyValidationInExplorer de la clase FizzbuzzService", () => {

    test("Validar la propiedad score % 3, si no hay residuo asignar a la propiedad trick FIZZ", () => {
        const explorer = {name: "Explorer", score: 3};
        const explorerFizz = ExplorerValidation.applyValidationInExplorer(explorer);

        expect(explorerFizz).toEqual({name: "Explorer", score: 3, trick: "FIZZ"});
    });

    test("Validar la propiedad score % 5, si no hay residuo asignar a la propiedad trick BUZZ", () => {
        const explorer = {name: "Explorer", score: 5};
        const explorerFizz = ExplorerValidation.applyValidationInExplorer(explorer);

        expect(explorerFizz).toEqual({name: "Explorer", score: 5, trick: "BUZZ"});
    });

    test("Validar la propiedad score % 5 && % 3, si no hay residuo asignar a la propiedad trick FIZZBUZZ", () => {
        const explorer15 = {name: "Explorer", score: 15};
        const explorerFizz = ExplorerValidation.applyValidationInExplorer(explorer15);

        expect(explorerFizz).toEqual({name: "Explorer", score: 15, trick: "FIZZBUZZ"});
    });

    test("Validar la propiedad score, si hay residuo asignar a la propiedad trick el valor del score", () => {
        const explorer1 = {name: "Explorer3", score: 1};
        const explorerFizzbuzz = ExplorerValidation.applyValidationInExplorer(explorer1);

        expect(explorerFizzbuzz).toEqual({ name: "Explorer3", score: 1, trick:1});
    }); 
});