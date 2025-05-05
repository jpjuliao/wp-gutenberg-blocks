import { useBlockProps, RichText, PlainText } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as Dialog from '@radix-ui/react-dialog';

interface DialogBlockAttributes {
	content: string;
	title: string;
	description: string;
	buttonText: string;
	isOpen: boolean;
}

const Edit: React.FC<BlockEditProps<DialogBlockAttributes>> = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const { content, title, description, buttonText, isOpen } = attributes;

	const onChangeButtonText = (newVal: string) => {
		setAttributes({ buttonText: newVal });
	};

	const onChangeTitle = (newVal: string) => {
		setAttributes({ title: newVal });
	};

	const onChangeDescription = (newVal: string) => {
		setAttributes({ description: newVal });
	};

	const onChangeContent = (newVal: string) => {
		setAttributes({ content: newVal });
	};

	return (
		<div {...blockProps}>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					{/* Use a real button for structure, PlainText inside */}
					<button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
						<PlainText
							value={buttonText}
							onChange={onChangeButtonText}
							placeholder={__("Button Text...", 'jpjuliao-gutenberg-blocks')}
						/>
					</button>
				</Dialog.Trigger>

				{/* Simplified Editor Preview for Dialog Content */}
				<div className="mt-4 rounded border border-dashed border-gray-300 bg-gray-50 p-4">
					<h3 className="mb-2.5 mt-0 text-sm text-gray-600">
						{__('Dialog Content (Editable)', 'jpjuliao-gutenberg-blocks')}
					</h3>

					{/* Editable Title */}
					<label className="mb-1 block font-bold">{__('Title:', 'jpjuliao-gutenberg-blocks')}</label>
					<RichText
						tagName="h2"
						value={title}
						onChange={onChangeTitle}
						placeholder={__("Enter dialog title...", 'jpjuliao-gutenberg-blocks')}
						className="m-0 text-[17px] font-medium text-mauve12"
						allowedFormats={['core/bold', 'core/italic']}
					/>

					{/* Editable Description */}
					<label className="mb-1 mt-2.5 block font-bold">{__('Description:', 'jpjuliao-gutenberg-blocks')}</label>
					<RichText
						tagName="p"
						value={description}
						onChange={onChangeDescription}
						placeholder={__("Enter dialog description...", 'jpjuliao-gutenberg-blocks')}
						className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11"
						allowedFormats={['core/bold', 'core/italic', 'core/link']}
					/>

					{/* Editable Content */}
					<label className="mb-1 mt-2.5 block font-bold">{__('Main Content:', 'jpjuliao-gutenberg-blocks')}</label>
					<RichText
						tagName="div"
						multiline="p"
						value={content}
						onChange={onChangeContent}
						placeholder={__("Enter main dialog content...", 'jpjuliao-gutenberg-blocks')}
						className="py-2"
						allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/list']}
					/>
				</div>
			</Dialog.Root>
		</div>
	);
};

export default Edit;
