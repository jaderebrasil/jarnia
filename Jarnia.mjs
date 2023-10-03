import { CharacterData } from "./modules/character/CharacterData.mjs";

Hooks.on("init", () => {
    CONFIG.Actor.systemDataModels.character = CharacterData;
});