import React from 'react'

//Default value will be dispalyed if no Provider tag is used.
const UserContext = React.createContext("Default Value")

const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
//Below export is needed if we want to use ContextType
export default UserContext