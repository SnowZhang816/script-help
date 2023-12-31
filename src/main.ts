// import { js } from "cc";
import { ExecuteSceneScriptMethodOptions } from "../@types/packages/scene/@types/public";

/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    async log() {
        const options: ExecuteSceneScriptMethodOptions = {
            name: "script-help",
            method: 'asyncParentSize',
            args: []
        };

        const result = await Editor.Message.request('scene', 'execute-scene-script', options)
    },
};


/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export function load() {
    console.warn("script-help load")
}

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export function unload() {
    console.warn("script-help unload")
}

