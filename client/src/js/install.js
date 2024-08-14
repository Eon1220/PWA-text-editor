const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // store event for later
    window.deferredPrompt = event;

    // remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent){
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // await prompt respons
    const result = await promptEvent.userChoice;

    console.log('User Chose:', result);


    // reset defferred prompt variable
    window.deferredPrompt = null;

    // Hide install button
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear deferred prompt
    window.deferredPrompt = null;
});
