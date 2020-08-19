import React, { useEffect } from 'react';

export default function PlatformWindow() {
    useEffect(() => {
        fin.Platform.Layout.init();
    }, []); // Data ensures this only runs once
    return <div>
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }
    `}</style>
        <div style={{
            height: '20px',
            width: '100%',
            backgroundColor: 'red',
            //@ts-ignore
            ['-webkit-app-region']: 'drag'
        }}>TitleBar</div>
        <div id="layout-container" style={{
            height: 'calc(100% - 20px)',
            width: '100%',
            backgroundColor: 'red',
        }}></div>
    </div>;
}