let init = () => {

	console.log('test')
	let nam1 = document.getElementById("inputName");
	if (nam1) {
		nam1.addEventListener("keyup", () => {
			validateName();
		})
	} else {
		setTimeout(() => {
			console.log('test1')
			nam1 = document.getElementById("inputName");
			nam1.addEventListener("keyup", () => {
				console.log('Name')
				validateName();
			});
		}, 100);
	}

	console.log('test2')
	let mail1 = document.getElementById("inputEmail");
	if (mail1) {
		mail1.addEventListener("keyup", () => {
			validateEmail();
		})
	} else {
		setTimeout(() => {
			console.log('test3')
			log1 = document.getElementById("inputEmail");
			log1.addEventListener("keyup", () => {
				console.log('Email')
				validateEmail();
			});
		}, 100);
	}

	console.log('test4')
	let pass1 = document.getElementById("inputPassword");
	if (pass1) {
		pass1.addEventListener("keyup", () => {
			validatePassword();
		})
	} else {
		setTimeout(() => {
			console.log('test5')
			pass1 = document.getElementById("inputPassword");
			pass1.addEventListener("keyup", () => {
				console.log('Password')
				validatePassword();
			});
		}, 100);
	}

	console.log('test6')
	let pass2 = document.getElementById("inputPassword2");
	if (pass2) {
		pass2.addEventListener("keyup", () => {
			validatePassword2();
		})
	} else {
		setTimeout(() => {
			console.log('test7')
			pass2 = document.getElementById("inputPassword2");
			pass2.addEventListener("keyup", () => {
				console.log('Password2')
				validatePassword2();
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
}

	let checkValidateName = () => {
		let nam1 = document.getElementById("inputName");
		if (nam1.value.length < 6) {
			return false
		} else {
			return true
		}
	}

	let validateName = () => {
		let nam1 = document.getElementById("inputName");
		if (checkValidateName()) {
			nam1.style.border = '1px solid green';
		} else {
			nam1.style.border = '1px solid red';
		}
	}

	let checkValidateEmail = () => {
		let mail1 = document.getElementById("inputEmail");
		if (mail1.value.match('@') != null) {
			return true
		} else {
			return false
		}
	}

	let validateEmail = () => {
		let mail1 = document.getElementById("inputEmail");
		if (checkValidateEmail()) {
			mail1.style.border = '1px solid green';
		} else {
			mail1.style.border = '1px solid red';
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
		console.log('validate pwd')
		let pass1 = document.getElementById("inputPassword");
		if (checkValidatePassword()) {
			pass1.style.border = '1px solid green';
		} else {
			pass1.style.border = '1px solid red';
		}
	}

	let checkValidatePassword2 = () => {
		let pass1 = document.getElementById('inputPassword');
		let pass2 = document.getElementById("inputPassword2");
		if (pass1.value == pass2.value) {
			return true;
		} else {
			return false;
		}
	}

	let validatePassword2 = () => {
		console.log('validate pwd2')
		let pass1 = document.getElementById('inputPassword');
		let pass2 = document.getElementById("inputPassword2");
		if (checkValidatePassword2()) {
			pass1.style.border = '1px solid green';
			pass2.style.border = '1px solid green';
		} else {
			pass1.style.border = '1px solid green';
			pass2.style.border = '1px solid red';
		}
	}

	let validateFormSumbit = () => {
		console.log('validate sumbit')
		if (checkValidateName() && checkValidateEmail() && checkValidatePassword2()) {
			$.post("/signup",{test: "test"}, function(){
				window.location.assign("/localhost:9711/login/login.html");
				console.log($.post);
			});
		console.log($.post);
		console.log('Верно');
		} else {
		console.log('Заполните форму');
		}
	}

init();

