import * as OfflinePluginRuntime from 'offline-plugin/runtime';

interface BeforeInstallPromptEvent extends Event {
    userChoice: Promise<EventListenerObject>;
}

export const registerServiceWorker = (): void => {
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

        // 用户添加主屏操作
        window.addEventListener('beforeinstallprompt', (e: Event) => {
            (<BeforeInstallPromptEvent>e).userChoice.then((choiceResult: any) => {
                console.log(choiceResult.outcome);
                if (choiceResult.outcome === 'dismissed') {
                    console.log('User cancelled home screen install');
                } else {
                    console.log('User added to home screen');
                }
            });
        });
    } else {
        console.log(`Environment: ${process.env.environment}, ServiceWorker will not register`);
    }
};

