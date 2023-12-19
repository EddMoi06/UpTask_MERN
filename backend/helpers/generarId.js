
const generarId = () => {
    const math = Math.random().toString(36).substring(2)

    const fecha = Date.now().toString(36)

    return math + fecha
}

export default generarId