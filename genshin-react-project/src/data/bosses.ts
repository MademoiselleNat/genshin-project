type Boss = {
    id: string,
    name: string,
    locations: string[],
    drops: string[]
    specialty: string
}

export const bosses: Boss[] = [
    {
        id: "oceanid",
        name: "Oceanid",
        locations: ["Liyue"],
        drops: ["hydro-gem"],
        specialty: "Immune to hydro"
    },

    {
        id: "hilichurl",
        name: "Hilichurl",
        locations: ["Mondstadt", "Liyue"],
        drops: ["arrowhead", "mask"],
        specialty: "Extremely easy to kill"
    },

    {
        id: "tartar",
        name: "Tartaglia",
        locations: ["Liyue"],
        drops: ["hydro-gem"],
        specialty: "is a weekly boss"
    },

    {
        id: "electro-cube",
        name: "Electro hypostasis",
        locations: ["Mondstadt"],
        drops: ["electro-gem"],
        specialty: "easy af stupid ass cube"
    },

    {
        id: "raiden",
        name: "Raiden Shogun",
        locations: ["Inazuma"],
        drops: ["electro-gem"],
        specialty: "im scared of her"
    }
]