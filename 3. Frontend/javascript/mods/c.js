import { callDepth, b } from './b.js';
import { afn } from './a.js';

// console.log('CCCC');

export function c(depth = 0) {
	console.log(`${callDepth(depth)}C-c`);
	b(depth + 1);
}
export default (depth = 0) => {
	console.log(`${callDepth(depth)}C-def`);
	afn();
};