const validate = (event) => {
    event.preventDefault()
  const firstNameElement = document.getElementById("firstName");
  const lastNameElemnt = document.getElementById("lastName");
  const contactElement = document.getElementById("contact");
  const emailElement = document.getElementById("email");
  const locationElemnt = document.getElementById("location");

  const firstName = firstNameElement.value.trim();
  const lastName = lastNameElemnt.value.trim();
  const contact = contactElement.value.trim();
  const email = emailElement.value.trim();
  const location = locationElemnt.value.trim();

  const firstNameErrorElement = document.getElementById("firstNameError");    event.preventDefault();

    event.preventDefault();

    event.preventDefault();

    event.preventDefault();

    event.preventDefault();

  if (!/^[A-Z a-z]+$/.test(firstName)) {
    firstNameErrorElement.textContent =
      "First Name is required and should only contain only alphabetic characters (A-Z, a-z)";
    return;
  } else {
    firstNameErrorElement.textContent = "";
    lastNameElemnt.focus()
  }

  const lastNameErrorElement = document.getElementById("lastNameError");
  if (!/^[A-Z a-z]+$/.test(lastName)) {
    lastNameErrorElement.textContent =
      "Last Name is required and should only contain only alphabetic characters (A-Z, a-z)";
    return;
  } else {
    lastNameErrorElement.textContent = "";
    contactElement.focus()
  }

  const contactErrorElemnt = document.getElementById("contactError");
  if (!/^[0-9]{10}$/.test(contact)) {
    contactErrorElemnt.textContent =
      "Contact should only contain 10 digits (0-9)";
  } else {
    contactErrorElemnt.textContent = "";
    emailElement.focus()
  }

  const emailErrorElement = document.getElementById("emailError");
  if (!/^[a-zA-Z0-9.@]+$/.test(email)) {
    emailErrorElement.textContent =
      "Email Address should contain only alphabets, numbers, dots (.), and the at symbol (@).";
    return;
  } else {
    emailErrorElement.textContent = "";
    locationElemnt.focus()
  }

  const locationErrorElement = document.getElementById("locationError");
  if (location==='') {
    locationErrorElement.textContent =
      "Please enter location";
    return;
  } else {
    locationErrorElement.textContent = "";
  }

  alert("Form submited successfully")
  firstNameElement.value=''
  lastNameElemnt.value=''
  contactElement.value=''
  emailElement.value=''
  locationElemnt.value=''


};
