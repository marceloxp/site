import { readFileSync } from 'fs'
import YAML from 'yaml'

function generateImageUrl(techSlug) {
    const randomNumber = Math.floor(Math.random() * 2) + 1
    return `/images/history/${techSlug}-00${randomNumber}.png`
}

export default defineEventHandler(async (event) => {
    const yaml_data = readFileSync('./assets/site.yaml', 'utf8')
    const data = YAML.parse(yaml_data)

    data.history.forEach(history => {
        history.imageUrl = generateImageUrl(history.slug)
    })

    return data
})