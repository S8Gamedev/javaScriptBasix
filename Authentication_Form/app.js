const users = [
    { username: "alice", password: "1234" },
    { username: "bob", password: "abcd" }
  ];
  
  function authenticate() {
    const username = document.getElementsByClassName('username')[0].value;
    const password = document.getElementsByClassName('password')[0].value;
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (!user) {
      alert('Invalid username or password!');
    } else {
      alert('Login successful!');
      window.location.href = 'home.html';
    }
  }
  