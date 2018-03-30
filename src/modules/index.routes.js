/*
 * Created by Rama41222 on 3/31/18 2:41 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:26 AM by  Rama41222
 */

import users from './users/user.routes'

export default app => {
    app.use('/api/v1/users', users)

}
