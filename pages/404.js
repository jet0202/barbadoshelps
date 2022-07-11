import { Box, Heading, HStack, Image, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react"
import DropDown from "../components/DropDown"
import SearchBar from "../components/SearchBar"

const NotFoundPage = () => {
    return (
        <Box bgColor={'siteBackground2'}>
            <HStack flexDirection={'column-reverse'} minH={'90vh'} align={'center'} justify={{ base: 'start', md: 'center' }}>
                <VStack align={'left'} spacing={'8'}>
                    <Heading as={'h1'} size={'3xl'} color={'brand200'}>Whoops!</Heading>
                    <Heading as={'h3'} size={'lg'} color={'accent'}>Looks like we got turned around</Heading>
                    <Text>The Page you&apos;re looking for does,&apos;t exist</Text>
                    <LinkBox>
                        <LinkOverlay href="/">
                            <HStack>
                                <Text>Go to Homapage</Text>
                                <Image transform={'rotate(180deg)'} src="../btnIcon.svg" alt="back icon" />
                            </HStack>
                        </LinkOverlay>
                    </LinkBox>
                    <Text>Or search for a Charity below</Text>
                </VStack>
                <Image src="../404.png" alt="Lost Cat" h={{ base: '32', md: 'xl' }} />
            </HStack>
            <HStack align={'center'} justify={'center'}>
                <DropDown />
                <SearchBar />
            </HStack>
        </Box >
    )
}

export default NotFoundPage