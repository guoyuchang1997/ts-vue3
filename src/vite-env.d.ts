/// <reference types="vite/client" />
declare module '*.vue' {
    import { CommonExecOptions } from 'vue'
    const commonExecOptions: any
    export default commonExecOptions
}
declare module '*.js' {
    import { CommonExecOptions } from 'vue'
    const commonExecOptions: any
    export default commonExecOptions
}