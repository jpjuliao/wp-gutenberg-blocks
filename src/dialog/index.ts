import { registerBlockType } from 'wordpress__blocks';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';

const ATTRIBUTE_TYPES = {
	STRING: 'string' as const,
	BOOLEAN: 'boolean' as const,
};

const blockConfig = {
	category: metadata.category,
	title: metadata.title,
	attributes: {
		content: {
			type: ATTRIBUTE_TYPES.STRING,
			default: '',
		},
		title: {
			type: ATTRIBUTE_TYPES.STRING,
			default: '',
		},
		isOpen: {
			type: ATTRIBUTE_TYPES.BOOLEAN,
			default: false,
		},
		buttonText: {
			type: ATTRIBUTE_TYPES.STRING,
			default: 'OK',
		},
	},
	edit: Edit,
	save: Save,
};

registerBlockType(metadata.name, blockConfig);
