import { Container } from "@chakra-ui/react"
import React, { FC } from "react"
const Wrapper: FC<{children: React.ReactNode}>  = ({children}) => {
  return (
    <Container maxW={'1536px'} mx='auto' px={4}>
      {children}
    </Container>
  )
}

export default Wrapper