class GridPanel {
    constructor() {
        this.togglePanelBtn = document.getElementById('js-togglePanelBtn');
        this.togglePanel = document.getElementById('js-togglePanel')
        this.onClickToggleEvent();
    }

    onClickToggleEvent() {
        this.togglePanelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleThePanel();
        })  
    }

    toggleThePanel() {
        this.togglePanel.classList.toggle('responsive-example--is-visible');
    }
}

export default GridPanel;