function welcome(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  function fName() {
    alert(`Welcome ${fullName}!`);
  }
  fName();
}
