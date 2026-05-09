import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        // Prevent browser from restoring scroll position automatically
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Use a small timeout to ensure the scroll happens after the route has fully changed and rendered
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
            // Fallback for some layouts where window scroll doesn't work
            document.documentElement.scrollTo(0, 0);
            document.body.scrollTo(0, 0);
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname, search, hash]);

    return null;
}

