const Reader = require ("../../../lib/utils/Reader");
const ExplorerService = require("../../../lib/services/ExplorerService");

describe("Unit test for ExplorerService class", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    
    test("1) Filter explorer for mission node", () => {
        const explorerFilter = ExplorerService.filterByMission (explorers, "node");
        
        expect (explorerFilter.length).toBe(10);
    });

    test("2) Get amount of explorers by mission node", () => {
        const getExplorerByMission = ExplorerService.getAmountOfExplorersByMission (explorers, "node");
        
        expect(getExplorerByMission).toBe(10);
    });

    test("3) Get explorers usernames by mission node", () => {
        const explorerUsernameByMission = ExplorerService.getExplorersUsernamesByMission (explorers, "node");

        expect(explorerUsernameByMission).toEqual([
            "ajolonauta1",
            "ajolonauta2",
            "ajolonauta3",
            "ajolonauta4",
            "ajolonauta5",
            "ajolonauta11",
            "ajolonauta12",
            "ajolonauta13",
            "ajolonauta14",
            "ajolonauta15"]);
    });
});