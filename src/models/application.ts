
interface Error{
    code: number|string
    msg: string,
    detail?: any
}


export default interface Application{
    initialisationComplete: boolean,
    error?: Error,

}
