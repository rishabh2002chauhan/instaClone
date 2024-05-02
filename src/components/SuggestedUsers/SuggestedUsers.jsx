import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUser from '../../hooks/useGetSuggestedUser'

function SuggestedUsers() {
  const {isLoading, suggestedUsers} = useGetSuggestedUser();

  if(isLoading) return null;

  return (
    <VStack gap={4} py={6} px={8}>
        <SuggestedHeader />
        { suggestedUsers.length !== 0 && (
          <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
              Suggested For You
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color: 'gray.500'}} cursor={'pointer'}>
              See All
            </Text>    
          </Flex>
        )}
        {suggestedUsers.map(user => (
          <SuggestedUser user={user} key={user.id} />
        ))}
    </VStack>
  )
}

export default SuggestedUsers