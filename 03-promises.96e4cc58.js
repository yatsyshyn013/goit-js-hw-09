!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u={formEl:document.querySelector(".form"),delayEL:document.querySelector('[ name="delay"]'),stepEL:document.querySelector('[ name="step"]'),amountEL:document.querySelector('[ name="amount"]'),submitBtn:document.querySelector("button")};function a(e,t){var o=Math.random()>.3;return new Promise((function(n,r){setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}u.formEl.addEventListener("submit",(function(t){t.preventDefault();var o=Number(u.delayEL.value),n=Number(u.stepEL.value),r=Number(u.amountEL.value);if(o<0||n<0||r<=0)return void e(i).Notify.failure("Date must be positive");for(var l=1;l<=r;l++)a(l,o).then((function(t){var o=t.position,n=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(t){var o=t.position,n=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),o+=n;u.formEl.reset()}))}();
//# sourceMappingURL=03-promises.96e4cc58.js.map
