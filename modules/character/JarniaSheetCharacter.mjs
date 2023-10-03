export class JarniaSheetCharacter extends ActorSheet {
    
    async getData(options={}) {
        const sourceContext = await super.getData(options);

        return {
            character: sourceContext.actor.system,
        };
    }

    get template() {
        return "systems/jarnia/templates/character/JarniaSheetCharacter.hbs";
    }
}