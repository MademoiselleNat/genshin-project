type Material = {
    id: string,
    name: string,
    regions: string[] ,
    source?: string,
    category: "local specialty" | "common" | "boss drop"
};

export const materials: Material[] = [
    {
        id: "sweet-flower",
        name: "Sweet flower",
        regions: ["Mondstadt", "Liyue"],
        category: "common"
    },

    {
        id: "qingxin",
        name: "Qingxin",
        regions: ["Liyue"],
        category: "local specialty"
    }
]