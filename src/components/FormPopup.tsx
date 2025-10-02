import React from "react";
import { X } from "lucide-react";
import FormSection from "./FormSection";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
}

const FormPopup: React.FC<FormPopupProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <FormSection
            title={title}
            subtitle={subtitle}
            className="bg-white text-gray-900"
          />
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
