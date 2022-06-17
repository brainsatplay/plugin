import { TimeSeries } from 'https://cdn.jsdelivr.net/npm/visualscript/dist/index.esm.js'
const graph = new TimeSeries()

export default {
    tag: 'signalvis',
    element: graph,
    operator: (data) => {
        ui.data = [data]
        ui.draw() // FORCE DRAW: Update happens too fast for UI
    }
}