import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const request = useCallback(async (url, body = null, method = 'POST', headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { body, method, headers });
            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            setLoading(false);

            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return { loading, error, request, clearError };
};