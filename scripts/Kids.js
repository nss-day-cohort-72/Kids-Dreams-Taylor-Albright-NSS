import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === 'child') {
            for (const child of children) {
                if (child.id === parseInt(clickTarget.dataset.id)) {
            window.alert(`${child.name}'s wish is to ${clickTarget.dataset.wish}`)

                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

