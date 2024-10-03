class sort {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.sort-header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.sort-show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('sort-show') : null;
          }
        }
        elHeader.parentElement.classList.toggle('sort-show')
        const buttons = elHeader.parentElement.querySelectorAll('.sort-body div');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const className = button.classList[0];
                const textHeader = document.querySelector('.sort-header')
                console.log(button)
                textHeader.innerHTML = button.innerHTML
                const plants = document.querySelectorAll('.plants .plant');
                plants.forEach(plant => {
                    if (plant.classList.contains(className)) {
                        plant.classList.remove('hidden');
                    } else {
                        plant.classList.add('hidden');
                    }
                    if (button.classList.contains('default')) {
                        plant.classList.remove('hidden');
                    }
                });
            });
        });
      });
    }
  }

  new sort('#sort-by');