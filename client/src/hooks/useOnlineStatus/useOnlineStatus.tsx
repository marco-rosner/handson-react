import { useEffect, useState } from 'react'

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
        }
    }, [])

    return isOnline;
}