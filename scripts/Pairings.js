import { getChildren } from "./database.js"
import { getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let kidStar = null
    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
            kidStar = celebrity
        }
    }

    return kidStar
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

