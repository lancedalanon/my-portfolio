"use client";
import React, { useRef, useEffect } from "react";
import Button from "@/components/Button";

interface ModalProps {
  isOpen: boolean; // Determines if the modal is open or closed
  onClose: () => void; // Function to call when closing the modal
  children?: React.ReactNode; // Content to display inside the modal
  className?: string; // Additional class names for the modal
}

// Main Modal Component
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null); // Reference to the dialog element

  // Open/close dialog based on `isOpen`
  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (isOpen) {
        // Show the modal when open
        dialog.showModal(); 
        // Disable scroll on the body when modal is open
        document.body.style.overflow = "hidden"; 
      } else {
        // Close the modal when not open
        dialog.close(); 
        // Re-enable scroll on the body when modal is closed
        document.body.style.overflow = ""; 
      }
    }

    return () => {
      // Cleanup: Ensure scroll is re-enabled if the component is unmounted
      document.body.style.overflow = ""; 
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={`rounded-3xl shadow-lg backdrop:bg-black/50 max-w-full overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-end">
        {/* Close Button */}
        <Button 
          className="text-5xl text-white p-4 mx-3 rounded-full select-none focus:outline-none" 
          onClick={onClose} 
        >
          &times; {/* Close icon */}
        </Button>
      </div>
      <div className="max-h-[80vh] overflow-auto"> {/* Set max height and overflow for scrollable content */}
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
