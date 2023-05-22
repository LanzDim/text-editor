const butInstall = document.getElementById("buttonInstall");

const handleBeforeInstallPrompt = (event) => {
  console.log("hit");
  console.log("event", event);
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.remove('hidden');
};

const handleInstallButtonClick = async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.add('hidden');
};

const handleAppInstalled = (event) => {
  console.log('install hit');
  window.deferredPrompt = null;
};

window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
butInstall.addEventListener('click', handleInstallButtonClick);
window.addEventListener('appinstalled', handleAppInstalled);
