import React, { useEffect } from 'react';

export default function app() {
    // Pass in empty array to only run once
    useEffect(() => {
        fin.Platform.init();
    }, []);
    return <div>Custom Provider</div>;
};