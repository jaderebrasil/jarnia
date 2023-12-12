import {capitalize} from "../utils.mjs";

export class JarniaSheetCharacter extends ActorSheet {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: 720,
            height: 900,
            tabs: [{navSelector: ".tabs", contentSelector: ".sheet-body", initial: "attributes"}],
            classes: ["jarnia", "sheet", "actor", "character"], 
        });
    }

    /** @override */
    async getData(options={}) {
        const sourceContext = await super.getData(options);

        const attributePacker = (attrName) => {return {
                "name": attrName,
                "label": game.i18n.localize(`Jarnia.Character.Attributes.${capitalize(attrName)}`),
                "value": sourceContext.actor.system[attrName], 
                "defense": 11 + sourceContext.actor.system[attrName], 
            };
        };

        const statusPacker = (statusName) => {
            let max = `${statusName}Max`;
            return {
                "name": statusName,
                "nameMax": max,
                "label": game.i18n.localize(`Jarnia.Character.Status.${capitalize(statusName)}`),
                "value": sourceContext.actor.system[statusName],
                "valueMax": sourceContext.actor.system[max],
            };
        };

        const statusMaxPacker = (statusName) => {
            return {
                "name": statusName,
                "label": game.i18n.localize(`Jarnia.Character.Status.${capitalize(statusName)}`),
                "value": sourceContext.actor.system[statusName],
            };
        };

        const getEnrichHTML = async (htmlField) => await TextEditor.enrichHTML(htmlField, {
            secrets: sourceContext.actor.isOwner,
            async: true,
            relativeTo: sourceContext.actor
        });

        const physSlots = sourceContext.actor.system.physicalSlots;
        const nslots = sourceContext.actor.system.vigor + 10;

        while (physSlots.length < nslots) {
            physSlots.push('');
        }

        while (physSlots.length > nslots) {
            physSlots.pop();
        }

        return {
            character: sourceContext.actor.system,
            charImg: sourceContext.actor.img,
            charName: sourceContext.actor.name,

            cssClass: this.actor.isOwner? "editable" : "locked",

            charBasicAttrs: CONFIG.Jarnia.charBasicAttrs.map(attributePacker),
            charStatus: CONFIG.Jarnia.charStatus.map(statusPacker),
            charMaxStatus: CONFIG.Jarnia.charMaxStatus.map(statusMaxPacker),

            charSkills: await getEnrichHTML(sourceContext.actor.system.skills),
            charTraits: await getEnrichHTML(sourceContext.actor.system.traits),
            charDescription: await getEnrichHTML(sourceContext.actor.system.description),
            charGifts: await getEnrichHTML(sourceContext.actor.system.gifts),
            charVocations: await getEnrichHTML(sourceContext.actor.system.vocations),
            charPhysicalSlots: sourceContext.actor.system.physicalSlots,
        };
    }

    /** @override */
    get template() {
        return "systems/jarnia/templates/character/JarniaSheetCharacter.hbs";
    }
}
