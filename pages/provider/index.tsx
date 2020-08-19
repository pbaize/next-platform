import React, { useEffect } from 'react';
import main from './logic';

export default function app() {
    // Pass in empty array to only run once
    useEffect(main, []);
    return <div>Custom Provider</div>;
};