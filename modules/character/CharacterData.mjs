export class CharacterData extends foundry.abstract.DataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            biography: new fields.HTMLField(),
            description: new fields.HTMLField(),
            health: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            healthMax: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            energy: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            energyMax: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            vigor: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            ability: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            knowledge: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            sentience: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            influence: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            armor: new fields.NumberField({
                required: true,
                initial: 0,
                integer: true
            }),
            physicalSlots: new fields.ArrayField(new fields.SchemaField({
                name: new fields.StringField({initial: "", trim: true}),
                stressed: new fields.BooleanField(),
            })),
            traits: new fields.HTMLField({initial: "", trim: true}),
            skills: new fields.HTMLField({initial: "", trim: true}),
            gifts: new fields.HTMLField({initial: "", trim: true}),
            vocations: new fields.HTMLField({initial: "", trim: true}),
        };
    }
}
