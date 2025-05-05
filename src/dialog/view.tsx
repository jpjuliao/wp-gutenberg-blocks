import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { createRoot } from 'react-dom/client';
import './view.css';

interface DialogProps {
	buttonText: string;
	title: string;
	description: string;
	content: string;
}

const InteractiveDialog = ({
	buttonText,
	title,
	description,
	content,
}: DialogProps) => {
	const contentMarkup = { __html: content };

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
					{buttonText}
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
				<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
					<Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
						{title}
					</Dialog.Title>
					<Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
						{description}
					</Dialog.Description>
					<div
						className="py-2"
						dangerouslySetInnerHTML={contentMarkup}
					/>
					<Dialog.Close asChild>
						<button
							className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
							aria-label="Close"
						>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

document.addEventListener('DOMContentLoaded', () => {

	const containers = document.querySelectorAll('.radix-dialog-container');
	if (containers.length > 0) {
		containers.forEach((container) => {
			if (!(container instanceof HTMLElement)) {
				console.warn('Found .radix-dialog-container that is not an HTMLElement:', container);
				return;
			}

			const buttonText = container.dataset.buttonText || 'Edit profile';
			const title = container.dataset.title || 'Edit profile';
			const description = container.dataset.description || 'Make changes...';
			const content = container.dataset.content || '<p>No content provided.</p>';

			const root = createRoot(container);

			root.render(
				<InteractiveDialog
					buttonText={buttonText}
					title={title}
					description={description}
					content={content}
				/>
			);
		});
	}
});
