import keys from "../../config/keys";

const isProd = keys.isProd;

export function sleep(ms: number) {
  if (isProd) { return; }
  console.log(`延迟${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function dump(obj: any, title: string = '', json: boolean = true) {
  if (isProd) { return; }
  const sObj = json ? JSON.stringify(obj) : obj;
  console.log('>' + sObj + '..........' + title);
}