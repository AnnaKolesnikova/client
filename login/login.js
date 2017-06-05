let init = () => {

	console.log('test')
	let log1 = document.getElementById("inputLogin");
	if (log1) {
		log1.addEventListener("change", () => {
			validateLogin();
		})
	} else {
		setTimeout(() => {
			console.log('test1')
			log1 = document.getElementById("inputLogin");
			log1.addEventListener("change", () => {
        console.log('Name')
				validateLogin();
			});
  	}, 100);
	}

	console.log('test2')
	let pass1 = document.getElementById("inputPassword");
	if (pass1) {
		pass1.addEventListener("change", () => {
			validatePassword();
		})
	} else {
		setTimeout(() => {
			console.log('test3')
			pass1 = document.getElementById("inputPassword");
			pass1.addEventListener("change", () => {
				console.log('Password')
				validatePassword();
			});
		}, 100);
	}

	console.log('button')
	let but1 = document.getElementById("button");
	if (but1) {
		but1.addEventListener("click", () => {
			validateFormSumbit();
		})
	} else {
		setTimeout(() => {
			console.log('test4')
			but1 = document.getElementById("button");
			but1.addEventListener("click", () => {
				console.log('button timeout')
				validateFormSumbit();
			});
		}, 100);
	}

	console.log('button_reg')
	let but2 = document.getElementById("button_reg");
	if (but2) {
		but2.addEventListener("click", () => {
			redirectReg();
		})
	} else {
		setTimeout(() => {
			console.log('test5')
			but2 = document.getElementById("button_reg");
			but2.addEventListener("click", () => {
				console.log('button timeout2')
				redirectReg();
			});
		}, 100);
	}
}

	let checkValidateLogin = () => {
		let log1 = document.getElementById("inputLogin");
		if (log1.value.match('@') != null) {
			return true
		} else {
			return false
		}
	}

	let validateLogin = () => {
		console.log('validate pwd')
		let log1 = document.getElementById("inputLogin");
		if (checkValidateLogin()) {
			log1.style.border = '1px solid green';
		} else {
			log1.style.border = '1px solid red';
		}
	}

	let checkValidatePassword = () => {
		let pass1 = document.getElementById("inputPassword");
		if (pass1.value.length < 6) {
			return false;
		} else {
			return true;
		}
	}

	let validatePassword = () => {
		let pass1 = document.getElementById("inputPassword");
		if (checkValidatePassword()) {
			pass1.style.border = '1px solid green';
		} else {
			pass1.style.border = '1px solid red';
		}
	}

	let validateFormSumbit = () => {
		console.log('validate sumbit')
		let but1 = document.getElementById("button");
		if (checkValidateLogin() && checkValidatePassword()) {
			console.log('Верно');
			window.location.assign("http://localhost:9711/reg/reg.html");
			console.log(window.location)
		} else {
			console.log('Заполните форму');
		}
	}

	let redirectReg = () => {
		let but2 = document.getElementById("button_reg");
		window.location.assign("http://localhost:9711/reg/reg.html");
	}

init();


