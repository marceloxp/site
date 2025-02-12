import { readFileSync } from 'fs'
import YAML from 'yaml'

function generateImageUrl(techSlug) {
    const randomNumber = Math.floor(Math.random() * 2) + 1
    return `/images/history/${techSlug}-00${randomNumber}.png`
}

export default defineEventHandler(async (event) => {
    const lang = getRouterParam(event, 'lang') || 'en'
    const file_name = `./assets/site-${lang}.yaml`

    const yaml_data = readFileSync(file_name, 'utf8')
    const data = YAML.parse(yaml_data)

    data.history.forEach(history => {
        history.imageUrl = generateImageUrl(history.slug)
    })

    return data
})