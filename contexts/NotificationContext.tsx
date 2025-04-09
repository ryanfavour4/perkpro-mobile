import registerForPushNotificationsAsync from "@/utils/registerForPushNotifications";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import * as Notifications from 'expo-notifications';
import { NotificationResponse } from "expo-notifications";

interface NotificationContextType {
    expoPushToken: string | null;
    notification: Notifications.Notification | null;
    response: Notifications.NotificationResponse | null;
}


const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState<Notifications.Notification | undefined>(
        undefined
    );
    const notificationListener = useRef<Notifications.EventSubscription>();
    const responseListener = useRef<Notifications.EventSubscription>();

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then(token => setExpoPushToken(token ?? ''))
            .catch((error: any) => setExpoPushToken(`${error}`));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(notificationListener.current);
            responseListener.current &&
                Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <NotificationContext.Provider value={{ expoPushToken, notification, response }}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotification = () => useContext(NotificationContext) as NotificationContextType;