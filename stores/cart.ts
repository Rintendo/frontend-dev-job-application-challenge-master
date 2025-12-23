import { defineStore } from "pinia";
import { Color, Motive, CartState } from "../types"
// saves whole color object!
export const useOrderStore = defineStore('order', {
state: (): CartState => ({
    selectedColor: "",
    selectedMotive: ""

    }),
    getters: {
        totalPrice: (state) => 
            (state.selectedColor?.price ?? 0) + (state.selectedMotive?.price ?? 0)
    },
    actions: {
        pickColor(colorInput: Color) {
            this.selectedColor = colorInput
        },
        pickMotive(motiveInput: Motive) {
            this.selectedMotive = motiveInput
        },
        initStore(color: Color, motive: Motive) {
            if (!this.selectedColor) {
                this.selectedColor = color
            }
            if (!this.selectedMotive) {
                this.selectedMotive = motive
            }
        }
    }
})