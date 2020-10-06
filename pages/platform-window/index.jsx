import React, { useEffect, useState } from 'react';
import TitleBar from '../../components/title-bar';
import LeftMenu from '../../components/left-menu';
// import './Window.module.css.module.css';


export default function PlatformWindow() {
    useEffect(() => {
        fin.Platform.Layout.init();
    }, []); // Data ensures this only runs once
    const [contentToShow, setContent] = useState('layout');
    const [showMenu, setShowMenu] = useState(false);
    return <div id={"of-frame-main"}>
        <TitleBar toggleMenu={() => setShowMenu(() => !showMenu)}></TitleBar>
        <div id={"body-container"}>
            {showMenu && <LeftMenu></LeftMenu>}
            <div className={"two-sided-container"}>
                <div id={"layout-container"} className={"face"}></div>
                {/* <layout-form className={"face hidden"}></layout-form> */}
                {/* <snapshot-form className={"face hidden"}></snapshot-form> */}
            </div>
        </div>
    </div>;
}