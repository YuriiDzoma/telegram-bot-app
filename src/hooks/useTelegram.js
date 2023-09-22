const telegram = window.Telegram.WebApp;

export function useTelegram() {
    const closeTelegram = () => {
        telegram.close();
    }

    const onToggleButton = () => {
        if (telegram.MainButton.isVisible) {
            telegram.MainButton.hide();
        } else {
            telegram.MainButton.show();
        }
    }
    return {
        onToggleButton,
        closeTelegram,
        telegram,
        user: telegram.initDataUnsafe?.user,
    }
}