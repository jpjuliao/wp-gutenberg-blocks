import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

const ATTRIBUTE_TYPES = {
	STRING: 'string' as const,
	BOOLEAN: 'boolean' as const,
	HTML: 'html' as const,
	TEXT: 'text' as const,
};

const blockConfig = {
	category: metadata.category,
	title: metadata.title,
	attributes: {
		content: {
			type: ATTRIBUTE_TYPES.STRING,
			default: '',
			source: ATTRIBUTE_TYPES.HTML,
			selector: '.dialog-content-area',
		},
		description: {
			type: ATTRIBUTE_TYPES.STRING,
			default: '',
			source: ATTRIBUTE_TYPES.HTML,
			selector: '.dialog-description-area',
		},
		title: {
			type: ATTRIBUTE_TYPES.STRING,
			default: '',
			source: ATTRIBUTE_TYPES.HTML,
			selector: '.dialog-title-area',
		},
		buttonText: {
			type: ATTRIBUTE_TYPES.STRING,
			default: 'Open Dialog',
			source: ATTRIBUTE_TYPES.TEXT,
			selector: '.dialog-button-text-area',
		},
		isOpen: {
			type: ATTRIBUTE_TYPES.BOOLEAN,
			HTML: ATTRIBUTE_TYPES.HTML,
			default: false,
		},
	},
	edit: Edit,
	save: Save,
};

registerBlockType(metadata.name, {
	...blockConfig,
	edit: Edit,
	save: Save,
});
