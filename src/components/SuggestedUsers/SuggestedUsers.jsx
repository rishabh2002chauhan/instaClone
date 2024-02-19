import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

function SuggestedUsers() {
  return (
    <VStack gap={4} py={6} px={8}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
                Suggested For You
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: 'gray.500'}} cursor={'pointer'}>
                See All
            </Text>    
        </Flex>
        <SuggestedUser name='Dan Abrahmov' followers={1392} avatar='https://bit.ly/dan-abramov' />
        <SuggestedUser name='Ryan Florence' followers={567} avatar='https://bit.ly/ryan-florence' />
        <SuggestedUser name='Christian Nwamba' followers={759} avatar='https://bit.ly/code-beast' /> 
    </VStack>
  )
}

export default SuggestedUsers