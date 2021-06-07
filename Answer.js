// Section 1 answer
function stringDecoder(song) {
  return song.replace(/WUB/g, " ").replace(/ +/g, " ").trim();
}

// Section 2 answer
function phone(dr, phoneNumber) {
  let tempArray = dr.split("\n");
  let phoneDictionary = [];
  let countDuplicate = 0;
  let selectedCustomerIndex = 0;

  for (i = 0; i < tempArray.length; i++) {
    let customerName = String(tempArray[i].match(/([^<]+(?=>))/g));
    let customerPhoneNumber = String(
      tempArray[i].match(/[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}/)
    );
    let customerAddress = tempArray[i]
      .replace(customerName, "")
      .replace(phoneNumber, "")
      .replace(/[^a-zA-Z- 0-9]/g, "")
      .replace(/ +/g, " ")
      .trim();

    phoneDictionary.push({
      name: customerName,
      phoneNumber: customerPhoneNumber,
      address: customerAddress,
    });

    if (phoneNumber == customerPhoneNumber) {
      countDuplicate++;
      selectedCustomerIndex = i;
    }
  }

  if (countDuplicate > 0) {
    return countDuplicate > 1
      ? "Error => Too many people: " +
          phoneDictionary[selectedCustomerIndex].phoneNumber
      : "Phone => " +
          phoneDictionary[selectedCustomerIndex].phoneNumber +
          ", Name => " +
          phoneDictionary[selectedCustomerIndex].name +
          ", Address => " +
          phoneDictionary[selectedCustomerIndex].address;
  }

  return "Error => Not found: " + phoneNumber;
}
