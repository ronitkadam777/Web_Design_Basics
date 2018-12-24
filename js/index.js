function getAge() {
	const date = new Date();
	const age = date.getFullYear() - 1992;
	document.getElementById('age').innerHTML = age;
}