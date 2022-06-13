import sinePlugin from './nodes/sine/index.js'
import secondsPlugin from './nodes/time/index.js'

const seconds = Object.assign({children: []}, secondsPlugin)
const sine = Object.assign({children: []}, sinePlugin)
seconds.children.push(sine)

export default {
    seconds
}