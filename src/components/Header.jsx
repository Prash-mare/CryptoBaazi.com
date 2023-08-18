import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const bcss={
  color: "white",
  variant: "unstyled",
  padding: "1rem"
}
const Header = () => {
  return (
   <HStack p={4} shadow={'base'}  bg={"blackAlpha.900"}>
    <Button {...bcss}>
      <Link to="/">Home</Link>
    </Button>
    <Button {...bcss}>
      <Link to="/coins">Coins</Link>
    </Button>
    <Button {...bcss}>
      <Link to='/exchanges'>Exchanges</Link>
    </Button>
   </HStack>
  )
}

export default Header