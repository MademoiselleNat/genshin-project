type Boss = {
    id: string,
    name: string,
    location: string,
    drops: string[]
    specialty: string
}

export const bosses: Boss[] = [
    {
        id: "oceanid",
        name: "Oceanid",
        location: "Liyue",
        drops: ["hydro-gem"],
        specialty: "Immune to hydro"
    },

    {
        id: "tartar",
        name: "Tartaglia",
        location: "Liyue",
        drops: ["hydro-gem"],
        specialty: "is a weekly boss"
    },

    {
        id: "electro-cube",
        name: "Electro hypostasis",
        location: "Mondstadt",
        drops: ["electro-gem"],
        specialty: "easy af stupid ass cube"
    },

    {
        id: "raiden",
        name: "Raiden Shogun",
        location: "Inazuma",
        drops: ["electro-gem"],
        specialty: "im scared of her"
    }
]