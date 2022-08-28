const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");
const BotTelegram = require("../bot");

class ExplorerController{
    
    static getExplorersByMission (mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static getFizzbuzzAndNamebyMission(){
        const explorers = Reader.readJsonFile("explorers.json");
        const getExplorersUsernamesByMission= BotTelegram.fizzbuzzAndNamebyMission(explorers)
        return getExplorersUsernamesByMission;
    }
}

module.exports = ExplorerController;