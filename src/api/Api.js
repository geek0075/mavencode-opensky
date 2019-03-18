class Api {
    constructor() {
        // todo
    }
  
    static loginUser(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if ((username && username.toLowerCase().trim() === 'demo') && (password && password.toLowerCase().trim() === 'demo')) {
                    resolve({ username:username, token:'87378ubUGVuyg7vYUGVhdh#4826dgTjsdgbsybdsuy983646' });
                } else {
                    reject(new Error(`Invalid username or password`)); 
                }
            }, 10000);
        });
    }
}
export default Api;