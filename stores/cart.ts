import { defineStore } from "pinia";
import { Color, Motive, CartState } from "~/types"

export const useOrderStore = defineStore('order', {
state: (): CartState => ({
    fetchedColors: [] as Color[],
    fetchedMotives: [] as Motive[],
    selectedColor: null as Color | null,
    selectedMotive: null as Motive | null,
    loaded: false 


    }),
    getters: {
        totalPrice(state): number {
            if (!state.selectedColor || !state.selectedMotive) {
            return 0
            }
            return state.selectedColor.price + state.selectedMotive.price
        }
    },

    actions: {
        pickColor(colorInput: Color) {
            this.selectedColor = colorInput
        },
        pickMotive(motiveInput: Motive) {
            this.selectedMotive = motiveInput
        },
// plucks fetched data!
        initStore(colors: Color[], motives: Motive[]) {
            this.fetchedColors = colors
            this.fetchedMotives = motives
            
            if (colors[0] && motives[0]) {
                this.pickColor(colors[0])
                this.pickMotive(motives[0])
            }
            this.loaded = true

        }
    }
})