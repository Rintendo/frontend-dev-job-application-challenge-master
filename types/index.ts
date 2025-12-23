export interface Color {
    name: string
    color: string
    price: number
}

export interface Motive {
    name: string
    img: string
    price: number
}

export interface CartState {
  fetchedColors: Color[]
  fetchedMotives: Motive[]
  selectedColor: Color | null
  selectedMotive: Motive | null
  loaded: boolean 
}

// header + footer

export type HeaderAction = {
    label: string
    onClick: () => void
}