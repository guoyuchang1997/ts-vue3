/// <reference types="vite/client" />
declare module '*.vue' {
    import { CommonExecOptions } from 'vue'
    const commonExecOptions: CompositeOperation
    export default commonExecOptions
}