import Config from '@configs/';

class UserUtils {
    _getPermission() {
        const item = sessionStorage.getItem(Config.ObjectSession)
        if(item){
            const object = JSON.parse(item) || {}
            return object.Permission
        }
    }

    getUser() {
      return JSON.parse(sessionStorage.getItem(Config.ObjectSession))
    }
}

export default new UserUtils()
