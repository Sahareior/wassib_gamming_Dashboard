import React from "react";
import { Upload } from "lucide-react";

const QuizFields = ({ formData, onChange, edit = false }) => {
    return (
        <div className="space-y-4">
            {/* Upload Quiz File */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload quiz file
                </label>

                <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-yellow-400 transition">
                    <Upload className="h-6 w-6 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                        Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                        CSV, PDF file (Max. 5MB)
                    </p>

                    <input
                        type="file"
                        accept=".csv,.pdf"
                        className="hidden"
                        onChange={(e) =>
                            onChange("quizFile", e.target.files[0])
                        }
                    />
                </label>

                {/* Show existing file in edit mode */}
                {edit && formData.quizFileName && (
                    <p className="text-xs text-gray-500 mt-2">
                        Current file:{" "}
                        <span className="font-medium">
                            {formData.quizFileName}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default QuizFields;
