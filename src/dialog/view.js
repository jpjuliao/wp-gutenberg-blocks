import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
	// Find all containers for this block
	const containers = document.querySelectorAll('.radix-dialog-container');
	if (containers.length > 0) {
		containers.forEach(container => {
			// Create a root for each container
			const root = createRoot(container);
			// Render the interactive dialog
			root.render(
				<Dialog.Root>
					<Dialog.Trigger asChild>
						<button className="dialog-trigger">Open Dialog</button>
					</Dialog.Trigger>
					<Dialog.Portal> {/* Portal is correct for front-end */}
						<Dialog.Overlay className="dialog-overlay" />
						<Dialog.Content className="dialog-content">
							<Dialog.Title className="dialog-title">Dialog Block</Dialog.Title>
							<Dialog.Description className="dialog-description">
								This is a Radix UI Dialog rendered on the front end.
							</Dialog.Description>
							<Dialog.Close asChild><button className="dialog-close">Close</button></Dialog.Close>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			);
		});
	}
});
