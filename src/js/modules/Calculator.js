export default class Calculator {
	constructor({selectorCalc, SelectorInput}) {
		this.calc = document.querySelector(selectorCalc);
		this.input = document.querySelector(SelectorInput);
	}

	//Clear Input
	clear() {
		return this.input.value = '0';
	}

	//Add number to input
	addNumber(btnValue) {
		let test = this.input.value;
		if (+this.input.value === 0) return this.input.value = btnValue;
		this.input.value += btnValue;
		if (btnValue === '.' && isNaN(+this.input.value)) {
			this.input.value = test;
		}
	}

	//Calculate percent
	calcPercent() {
		return this.input.value = this.input.value / 100;
	}

	//BackSpace
	backSpace() {
		this.input.value = this.input.value.substring(0, this.input.value.length-1)
		if (+this.input.value === 0) this.clear();
	}

	//Calculate
	render() {
		if (this.input.value.trim() === '') return true
		return this.input.value = eval(this.input.value);
	}

	//Events
	init() {
		this.calc.addEventListener('click', (e) => {
			if (!e.target) return false;
			const elem = e.target;
			if (elem.hasAttribute('data-calc')) this.addNumber(elem.textContent)
			if (elem.hasAttribute('data-percent')) this.calcPercent()
			if (elem.hasAttribute('data-clear')) this.clear()
			if (elem.hasAttribute('data-back')) this.backSpace()
			if (elem.hasAttribute('data-render')) this.render()
		})
	}
}