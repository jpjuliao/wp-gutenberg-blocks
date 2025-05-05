import { useBlockProps } from "@wordpress/block-editor";

interface DialogBlockAttributes {
	buttonText: string;
	title: string;
	description: string;
	content: string;
}

const Save = ({ attributes } : { attributes: DialogBlockAttributes }) => {
	const {
		buttonText = 'Open Dialog',
		title = 'Dialog Title',
		description = 'Dialog Description',
		content = 'Dialog Content',
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} className="radix-dialog-container" data-title={title} data-description={description} data-content={content} data-button-text={buttonText}></div>
	);
};

export default Save;
