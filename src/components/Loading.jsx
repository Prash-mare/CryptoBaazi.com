import { VStack,Spinner,Box } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner size={"xl"} />
      </Box>
      <Box p={'9'}>
      Loading...
      </Box>

    </VStack>
  )
}

export default Loading