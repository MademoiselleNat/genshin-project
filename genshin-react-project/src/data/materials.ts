type Material = {
    id: string,
    name: string,
    regions: string[] ,
    source?: string,
    category: "Local specialty" | "Common" | "Boss drop"
};

export const materials: Material[] = [
    {
        id: "sweet-flower",
        name: "Sweet flower",
        regions: ["Mondstadt", "Liyue"],
        category: "Common"
    },

    {
        id: "qingxin",
        name: "Qingxin",
        regions: ["Liyue"],
        category: "Local specialty"
    },

    {
        id: "hydro-gem",
        name: "Hydro gem",
        regions: ["Liyue"],
        category: "Boss drop",
        source: "Oceanid"
    }
]