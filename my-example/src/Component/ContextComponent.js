import React from 'react'

const myContext = React.createContext()

const UserProvider = myContext.Provider

const UserConsumer = myContext.Consumer

export { UserProvider, UserConsumer }