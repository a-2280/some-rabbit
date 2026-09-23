export const FOOTER_COLOR_PAIRS = [
    { name: "Pink", bg: "#FFB3DE", text: "#A50059" },
    { name: "Yellow", bg: "#FFDF00", text: "#BF1B00" },
    { name: "Red", bg: "#A30000", text: "#FFB3C9" },
    { name: "Green", bg: "#66FF00", text: "#875700" },
    // { name: "Snow", bg: "#FFFFFF", text: "#E31C44" },
    { name: "Carbon", bg: "#3D3D3D", text: "#FFA500" },
    { name: "Ocean", bg: "#87CEEB", text: "#0000CC" },
    { name: "Sapphire", bg: "#0F52BA", text: "#ECC0FF" },
    { name: "Grape", bg: "#E6E6FA", text: "#AF3877" },
    { name: "Emerald", bg: "#7FFFD4", text: "#8F5C00" },
    { name: "Orange", bg: "#F1B42F", text: "#8C2800" },
    { name: "Chocolate", bg: "#964B00", text: "#F5D6D6" },
    { name: "Cherry", bg: "#FFB3DE", text: "#1F5F3B" },
    { name: "Chalk", bg: "#D3D3D3", text: "#5A5A5A" },
    { name: "Cocoa", bg: "#584017", text: "#FFCFC4" },
]

export function pickFooterPair(exclude) {
    const choices = exclude ? FOOTER_COLOR_PAIRS.filter(pair => pair !== exclude) : FOOTER_COLOR_PAIRS
    return choices[Math.floor(Math.random() * choices.length)]
}
