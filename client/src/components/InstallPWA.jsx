import { useEffect, useState } from "react";
import { FiDownload, FiX } from "react-icons/fi";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Hide if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowInstall(false);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white dark:bg-gray-800 shadow-xl border rounded-lg p-4 z-50">
      <button
        onClick={() => setShowInstall(false)}
        className="absolute top-2 right-2 text-gray-600"
      >
        <FiX size={22} />
      </button>

      <div className="flex gap-3 items-start">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <FiDownload className="text-white" size={22} />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Install App
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Install this app for faster access on your device.
          </p>

          <button
            onClick={installApp}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
