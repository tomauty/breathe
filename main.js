import { parseArguments } from './lib/cmd';

export default function run() {
	const config = parseArguments(process.argv);
}

run();
