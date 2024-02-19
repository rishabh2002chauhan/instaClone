import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import { Link as RouterLink, useParams } from 'react-router-dom'
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'

function ProfilePage() {

  const {username} = useParams();
  const {isLoading, userProfile}= useGetUserProfileByUsername(username);

  const userNotFound = !isLoading && !userProfile
  if(userNotFound) return <UserNotFound />

  return (
    <Container maxW="container.lg" py={5}>
        <Flex py={10} px={4} pl={{base: 4, md: 10}} w={"full"} mx={"auto"} flexDirection={"column"} >
            {!isLoading && userProfile && <ProfileHeader />}
            {isLoading && <ProfileHeaderSkeleton />}
        </Flex>
        <Flex px={{base: 2, sm: 4}} maxW={"full"} mx={"auto"} borderTop={"1px solid"} borderColor={"whiteAlpha.300"} direction={"column"} >
            <ProfileTabs />
            <ProfilePosts />
        </Flex>
    </Container>
  )
}

export default ProfilePage

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
    gap={{base: 'column', sm: 'row'}}
    justifyContent={'center'}
    alignItems={'center'}
    >
      <SkeletonCircle size='24' />
      <VStack alignItems={{base: 'center', sm: 'flex-start'}} gap={2} mx={'auto'} flex={1} >
        <Skeleton height='12px' width='150px' />
        <Skeleton height='12px' width='100px' />
      </VStack>
    </Flex>
  )
}

const UserNotFound = () => {
  return (
    <Flex flexDir='column' textAlign={'center'} mx={'auto'} >
      <Text fontSize={'2xl'} >User not found</Text>
      <Link as={RouterLink} to={'/'} color={'blue.500'} w={'max-content'} mx={'auto'} >
        Go home
      </Link>
    </Flex>
  )
}