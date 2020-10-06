import { Fin } from 'openfin-adapter';
import EntityType from 'openfin-adapter/src/shapes/EntityType';
import React, { useEffect } from 'react';
import useTheme from '../hooks/theme';

declare const fin: Fin<EntityType.WINDOW>;

const maxOrRestore = async () => {
    if (await fin.me.getState() === 'normal') {
        return await fin.me.maximize();
    }

    return fin.me.restore();
};

const toggleLockedLayout = async () => {
    const oldLayout = await fin.Platform.Layout.getCurrentSync().getConfig();
    const { settings, dimensions } = oldLayout;
    if (settings.hasHeaders && settings.reorderEnabled) {
        fin.Platform.Layout.getCurrentSync().replace({
            ...oldLayout,
            settings: {
                ...settings,
                hasHeaders: false,
                reorderEnabled: false
            }
        });
    } else {
        fin.Platform.Layout.getCurrentSync().replace({
            ...oldLayout,
            settings: {
                ...settings,
                hasHeaders: true,
                reorderEnabled: true
            },
            dimensions: {
                ...dimensions,
                headerHeight: 25
            }
        });
    }
};



const close = () => fin.me.close();
const minimize = () => fin.me.minimize();

export default function TitleBar({ toggleMenu }) {

    useEffect(() => {
        // fin.Platform.getCurrentSync().getWindowContext().then(initialContext => {
        //     if (initialContext && initialContext.theme) {
        //         setTheme(initialContext.theme);
        //     }
        // });

        // fin.Platform.getCurrentSync().on('window-context-changed', async (evt) => {
        //     const context = await fin.Platform.getCurrentSync().getWindowContext();
        //     //we only want to react to events that include themes
        //     if (evt.context.theme && evt.context.theme !== context.theme) {
        //         setTheme(evt.context.theme);
        //     }
        // });

        fin.me.on('layout-ready', async () => {
            // Whenever a new layout is ready on this window (on init, replace, or applyPreset)
            const { settings } = await fin.Platform.Layout.getCurrentSync().getConfig();
            // determine whether it is locked and update the icon
            if (settings.hasHeaders && settings.reorderEnabled) {
                document.getElementById('lock-button').classList.remove('layout-locked');
            } else {
                document.getElementById('lock-button').classList.add('layout-locked');
            }
        });
    });
    const { toggleTheme } = useTheme();

    return <div id="title-bar">
        <div className="title-bar-draggable">
            <div id="title"></div>
        </div>
        <div id="buttons-wrapper">
            <div className="button" title="Toggle Theme" id="theme-button" onClick={toggleTheme}></div>
            <div className="button" title="Toggle Sidebar" id="menu-button" onClick={toggleMenu}></div >
            <div className="button" title="Toggle Layout Lock" id="lock-button" onClick={toggleLockedLayout}></div >
            <div className="button" title="Minimize Window" id="minimize-button" onClick={minimize}></div >
            <div className="button" title="Maximize Window" id="expand-button" onClick={maxOrRestore}></div >
            <div className="button" title="Close Window" id="close-button" onClick={close}></div >
        </div >
    </div>;

}