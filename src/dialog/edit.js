import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit = () => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			{/* Static representation for the editor */}
			<button className="dialog-trigger" disabled>Open Dialog (Preview)</button>
			<p style={{ marginTop: '8px', fontStyle: 'italic', opacity: 0.7 }}>{ __( 'Radix Dialog - Renders on front-end', 'jpjuliao-gutenberg-blocks' ) }</p>
		</div>
	);
};

export default Edit;
