/**
 * WordPress dependencies
 */
const { createRef } = wp.element;

/**
 * Refs.
 */
export const REFS = {
	search_field : createRef(),
	search_results : createRef(),
	selected_results : createRef(),
};

export default REFS;
