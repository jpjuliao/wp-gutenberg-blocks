import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{'Jpjuliao Gb Blocks – hello from the saved content!'}
		</p>
	);
}
