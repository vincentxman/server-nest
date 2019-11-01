export function sleep(ms: number) {
    console.log(`延迟${ms}ms`);

    return new Promise(resolve => setTimeout(resolve, ms));
}

export function dump(obj: any, title: string = '', json: boolean = true) {
    const sObj = json ? JSON.stringify(obj) : obj;
    console.log('>' + sObj + '..........' + title);
}
