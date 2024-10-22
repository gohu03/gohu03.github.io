class Theme {
  constructor(){
    this.browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    this.curTheme = this.browserTheme;

    if (localStorage.getItem('color-theme') === null) {
      document.documentElement.setAttribute('color-theme', this.browserTheme);
    }
    else {
      this.curTheme = localStorage.getItem('color-theme');
      document.documentElement.setAttribute('color-theme', this.curTheme);
    }

    this.element = document.getElementById('theme-switcher');
    document.getElementById('theme-switcher-icon').setAttribute('src', '/assets/icons/theme/'+this.curTheme+'.svg');
  }

  switcher() {
    switch(this.curTheme){
      case 'light':
        this.set('dark');
        break;
      case 'dark':
        this.set('light');
        break;
    }
  }

  set(theme){
    this.curTheme = theme;
    document.documentElement.setAttribute('color-theme', theme);
    localStorage.setItem('color-theme', theme);
    document.getElementById('theme-switcher-icon').setAttribute('src', '/assets/icons/theme/'+theme+'.svg');
  }
}

const $theme = new Theme();