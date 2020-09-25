import React, { useEffect } from 'react';
import Link from 'next/link';


export default function app() {
    // Pass in empty array to only run once
    useEffect(() => {
        fin.Platform.init();
    }, []);
    return <div>
        <Link href="platform-window" >Custom Window (for prefetch)</Link>
    </div>;
};