import { readFileSync } from 'fs'
import YAML from 'yaml'

export default defineEventHandler(async (event) => {
    const yaml_data = readFileSync('./assets/site.yaml', 'utf8')
    const data = YAML.parse(yaml_data)
    return data
})