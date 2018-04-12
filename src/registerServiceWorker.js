import * as OfflinePluginRuntime from 'offline-plugin/runtime';

export default function registerServiceWorker() {
    if (process.env.environment === 'prod') {
        OfflinePluginRuntime.install({
            onUpdating: () => {
                console.log('SW Event:', 'onUpdating');
            },
            onUpdateReady: () => {
                console.log('SW Event:', 'onUpdateReady');
                OfflinePluginRuntime.applyUpdate();
            },
            onUpdated: () => {
                console.log('SW Event:', 'onUpdated');
                window.location.reload();
            },

            onUpdateFailed: () => {
                console.log('SW Event:', 'onUpdateFailed');
            }
        });
        window.addEventListener('beforeinstallprompt', (e) => {
            e.userChoice.then((choiceResult) => {
                console.log(choiceResult.outcome);
                if (choiceResult.outcome === 'dismissed') {
                    console.log('User cancelled home screen install');
                } else {
                    console.log('User added to home screen');
                }
            });
        });
    } else {
        console.info(`Environment: ${process.env.environment}, ServiceWorker will not register`);
    }
}

