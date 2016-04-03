/**
 * Convert program arguments to a config object
 *
 * @param argv
 * @returns Object
 */
export function parseArguments(argv = []) {

	const config = {
		minutes: 5,
		message: 'Focus on your breath.',
	};

	return config;
}
