import { CharacterData } from "./modules/character/CharacterData.mjs";
import { JarniaConfig } from "./modules/config.mjs";
import { JarniaSheetCharacter } from "./modules/character/JarniaSheetCharacter.mjs";

Hooks.on("init", () => {
    console.log("-- Initializing Jarnia RPG System --");
    CONFIG.Actor.systemDataModels.character = CharacterData;
    CONFIG.Jarnia = JarniaConfig;
    
    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("jarnia", JarniaSheetCharacter, {
        types: ["character"],
        makeDefault: true,
        label: "Jarnia.Character.JarniaSheetCharacter"
    });

    // // Preload Handlebars helpers & partials
    // utils.registerHandlebarsHelpers();
    // utils.preloadHandlebarsTemplates();
});