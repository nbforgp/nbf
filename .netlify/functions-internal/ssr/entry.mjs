import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Kl-Y9oXm.mjs';

const _page0  = () => import('./chunks/generic_XPhkP51H.mjs');
const _page1  = () => import('./chunks/index_QBIFC0cJ.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.2.4_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
