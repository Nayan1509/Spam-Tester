import React from "react";
import { Mail } from "lucide-react";

export default function InboxPreview({ subject }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="text-blue-500" />
        <h2 className="font-semibold">Inbox Preview</h2>
      </div>
      <div className="border rounded-lg p-4">
        <p className="text-sm font-bold">Your Company</p>
        <p className="font-medium">{subject}</p>
        <p className="text-sm text-gray-500">
          This is the first line of your email content that subscribers will
          see...
        </p>
        <p className="text-xs text-gray-400 text-right mt-2">2:34 PM</p>
      </div>
    </div>
  );
}
