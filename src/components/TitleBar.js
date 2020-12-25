import '../css/TitleBar.css';

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

function closeWindow () {  
    ipcRenderer.send('close-window'); 
}

function minimizeWindow () {   
    ipcRenderer.send('minimize-window'); 
}

function maximizeWindow () {
    ipcRenderer.send('resize-window'); 
}

function TitleBar() {
    return (
        <div className="TitleBar">
            <header class="TitleBar">
                <div class="option" id="minimize" onClick={minimizeWindow}>–</div>
                <div class="option" id="maximize" onClick={maximizeWindow}>☐</div>         
                <div class="option" id="close" onClick={closeWindow}>✕</div>
            </header>
        </div>
    );
}

export default TitleBar;