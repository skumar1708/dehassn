export const setSessionData = (key, value, ttl) => {
    const now = new Date();
  
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl * 1000
	}
	localStorage.setItem(key, JSON.stringify(item));
};

export const getSessionData = (key) => {
    const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
};

//Below is a serverside validation, with enhanced authantication approaches i.e. oAuth or jwt
export const validateLogin = (user, pass) => {
    const dbusers = {
        reader1: "reader1",
        reader2: "reader2",
    }

    return dbusers[user] == pass;
}