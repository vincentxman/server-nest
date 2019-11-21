import keys from "../_config/keys";
// import Consoler = require('./console-dump');
import clc = require('cli-color');

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.bgBlue.white;

const isProd = keys.isProd;

// eg. await sleep(3000);
export function sleep(ms: number) {
  if (isProd) { return; }
  dump(`延迟${ms}ms`, 'sleep');
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function dump(obj: any, title: string = '', bjson = false) {
  if (isProd) { return; }

  if (bjson)
    obj = JSON.stringify(obj, null, '\t');

  if (!title)
    title = '';
  // tslint:disable-next-line:no-console
  console.log(notice(`${title}>...`), warn(`${obj}`));
}
export function dumpErr(obj: any, title: string = '', bjson = false) {
  if (isProd) { return; }

  if (bjson)
    obj = JSON.stringify(obj, null, '\t');

  if (!title)
    title = '';

  // tslint:disable-next-line:no-console
  console.log(notice(`${title}>...`), error(`${obj}`));
}
