export function sleep(ms: number) {
    console.log(`延迟${ms}ms`);
    
    return new Promise(resolve => setTimeout(resolve, ms));
}
