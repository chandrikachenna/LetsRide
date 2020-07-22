
const envVaribles = process.env
const Config = {}
Object.keys(envVaribles).forEach(variable => {
    if (variable.includes('REACT_APP')) {
        const envKey = variable.replace("REACT_APP_", "")
        Config[envKey] = envVaribles[variable]
    }
}
)

export default Config