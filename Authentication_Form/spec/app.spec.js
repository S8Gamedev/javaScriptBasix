describe("Authentication tests", function() {
    let usernameInput, passwordInput;
  
    beforeEach(function() {
      // Setup DOM elements
      usernameInput = document.createElement("input");
      usernameInput.className = "username";
      document.body.appendChild(usernameInput);
  
      passwordInput = document.createElement("input");
      passwordInput.className = "password";
      document.body.appendChild(passwordInput);
  
      spyOn(window, "alert");
      spyOn(window, "location", "get").and.returnValue({ href: '' });
    });
  
    afterEach(function() {
      usernameInput.remove();
      passwordInput.remove();
    });
  
    it("should alert success and redirect on correct credentials", function() {
      usernameInput.value = "alice";
      passwordInput.value = "1234";
  
      authenticate();
  
      expect(window.alert).toHaveBeenCalledWith("Login successful!");
    });
  
    it("should alert failure on wrong username", function() {
      usernameInput.value = "charlie";
      passwordInput.value = "1234";
  
      authenticate();
  
      expect(window.alert).toHaveBeenCalledWith("Invalid username or password!");
    });
  
    it("should alert failure on wrong password", function() {
      usernameInput.value = "alice";
      passwordInput.value = "wrong";
  
      authenticate();
  
      expect(window.alert).toHaveBeenCalledWith("Invalid username or password!");
    });
  });
  