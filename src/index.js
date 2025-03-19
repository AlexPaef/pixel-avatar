function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash;
}

function generateAvatar({
        seed = 'default',
        size = 128,
        gridSize = 5,
        fillChance = 0.7,
        colors = ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6', '#1abc9c']
    } = {}) {
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);

    let hash = hashCode(seed);
    const bgColor = colors[hash % colors.length];

    const background = document.createElementNS(NS, "rect");
    background.setAttribute("x", 0);
    background.setAttribute("y", 0);
    background.setAttribute("width", size);
    background.setAttribute("height", size);
    background.setAttribute("fill", bgColor);
    svg.appendChild(background);

    let cellSize = size / gridSize;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col <= Math.floor(gridSize / 2); col++) {
            let localHash = hashCode(seed + row + col);
            let color = colors[Math.abs(localHash) % colors.length];

            if ((localHash % 100) / 100 < fillChance) {
                let rect = document.createElementNS(NS, "rect");
                rect.setAttribute("x", col * cellSize);
                rect.setAttribute("y", row * cellSize);
                rect.setAttribute("width", cellSize);
                rect.setAttribute("height", cellSize);
                rect.setAttribute("fill", color);
                svg.appendChild(rect);

                if (col !== gridSize - col - 1) {
                    let mirrorRect = rect.cloneNode();
                    mirrorRect.setAttribute("x", (gridSize - col - 1) * cellSize);
                    svg.appendChild(mirrorRect);
                }
            }
        }
    }
    return svg;
}

export default generateAvatar;
