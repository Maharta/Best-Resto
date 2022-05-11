const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('show');
    const navListLinks = drawer.querySelectorAll('a');
    if (drawer.classList.contains('show')) {
      navListLinks.forEach((link) => {
        link.setAttribute('tabindex', '0');
      });
    } else {
      navListLinks.forEach((link) => {
        link.setAttribute('tabindex', '-1');
      });
    }
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.setAttribute('tabindex', '-1');
    drawer.classList.remove('show');
  },
};

export default DrawerInitiator;
