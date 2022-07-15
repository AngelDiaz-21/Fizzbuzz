const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController{
    
    static getExplorersByMission (mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerByMission = ExplorerService.filterByMission(explorers, mission);

        return explorerByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const ExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return ExplorersUsernamesByMission;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const ExplorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return ExplorersAmountByMission;
    }
}

module.exports = ExplorerController;