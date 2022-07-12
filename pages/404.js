import { Box, Heading, HStack, Image, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/react"
import DropDown from "../components/DropDown"
import SearchBar from "../components/SearchBar"

const NotFoundPage = () => {
    return (
        <Stack bgColor={'siteBackground2'} py={'8'}>
            <HStack flexDirection={{ base: 'column-reverse', md: 'revert' }} minH={{ base: '55vh', md: '45vh' }} align={'center'} justify={{ base: 'start', md: 'center' }}>
                <VStack align={'left'} spacing={'8'}>
                    <Heading as={'h1'} size={'3xl'} color={'brand200'}>Whoops!</Heading>
                    <Heading as={'h3'} size={'lg'} color={'accent'}>Looks like we got turned around</Heading>
                    <Text color={'paragraph200'}>The Page you&apos;re looking for does,&apos;t exist</Text>
                    <LinkBox>
                        <LinkOverlay href="/">
                            <HStack>
                                <Text color={'paragraph200'}>Go to Homapage</Text>
                                <Image transform={'rotate(180deg)'} src="../btnIcon.svg" alt="back icon" h={'8'} />
                            </HStack>
                        </LinkOverlay>
                    </LinkBox>
                    <Text color={'paragraph200'}>Or search for a Charity below</Text>
                </VStack>
                <Image src="../404.png" alt="Lost Cat" h={{ base: '32', md: 'xl' }} />
            </HStack>
            <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }}>
                <DropDown />
                <SearchBar />
            </Stack>
        </Stack >
    )
}

export default NotFoundPage