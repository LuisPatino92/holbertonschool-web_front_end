const g_var = "Welcome";

function outer() {
  alert(g_var);
  const course = "Holberton";
  function inner() {
    alert(`${g_var} ${course}`);
    function inception() {
      alert(`${g_var} ${course}${exclamation}`);
    }
    inception();
  }
  const exclamation = "!";

  inner();
}

outer();
