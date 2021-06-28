import React, { useEffect } from 'react';
import Link from 'next/link';
import {inOpenFin} from 'openfin-adapter/src/mock';
export default function app() {
    // Pass in empty array to only run once
    useEffect(() => {

    }, []);
    return <div>
        <Link href="platform-window" >Custom Window (for prefetch)</Link>
    </div>;
};