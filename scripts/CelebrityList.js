import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === 'celebrity') {
            for (const celebrity of celebrities) {
                if (celebrity.id === parseInt(clickTarget.dataset.id)) {
                    window.alert(`${celebrity.name} is a ${clickTarget.dataset.sport} star`)

                }
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="celebrity--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
