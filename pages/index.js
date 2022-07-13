import { Box, Button, Center, Grid, GridItem, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import CharityCard from "../components/cards/CharityCard";
import Hero from "../components/Hero";
import { charities } from "../charityData";
import IconButton from "../components/buttons/IconButton";
import RegistrationCards from "../components/cards/RegistrationCards";

const desc1 = 'Collect online donations directly through your Website, Facebook page, Instagram account or other social media sources. With a Full Account, you access our complete suite of secure, low-cost fundraising tools.'
const desc2 = 'Satisfied with your current fundraising tools? You can still be a part of BarbadosHelps.org. Register your charity profile page which gives you access to the HelpNow! icon and promote your charity and your campaigns on Barbadoshelps.org.'


export default function Home() {
  return (
    <>
      <Hero />
      {/* BarbadosHelps */}
      <VStack as="section" textAlign={'center'} align={'center'} justify={'center'} minH={'75vh'} mt={'70px'}>
        <Box>
          <VStack>
            <Image src="../dog.png" alt="Dog and Cat" h={{ base: 'sm', md: 'xl' }} />
            <Heading as="h3" size="3xl" color={'brand200'} marginBottom={'420px'}>
              BarbadosHelps
            </Heading>
          </VStack>
        </Box>
        <Text color={'paragraph300'} maxW={{ base: '80%', md: '60%' }} lineHeight={'40px'} mb={'40'}>
          <Box as="span" fontWeight={'extrabold'}>BARBADOSHELPS</Box> is a registered non-profit-Organization serving Barbadian charities, non-profits and their donors.
          Our objective is to increase charitable giving across Barbados, the Barbadian Diaspora and the world by making it easier to donate online, and by passing on as much as possible of every dollar collected.
        </Text>

        <Button backgroundColor={'brand100'} color={'white'} p={'21px'} borderRadius={'40px'} mb={'40'}>Learn More</Button>
      </VStack>

      {/* Charities */}
      <VStack as='section' align={'center'} justify={'center'} backgroundColor={'siteBackground2'} py={20} px={6} mt={10} mb={12} spacing={10}>
        <Heading as="h3" size="3xl" color={'brand200'} marginBottom={'6'}>
          Charities
        </Heading>
        <SimpleGrid columns={[1, null, 5]} spacingY={{ base: 6, md: 'revert' }} >
          {charities.map((charity) => (
            <VStack key={charity.name} spacing={8}>
              <CharityCard name={charity.name} image={charity.image[0]} summary={charity.summary} />
              <HStack spacing={4}>
                <IconButton size={'xs'}>Help Now</IconButton>
                <Link color={'brand300'} fontWeight={"medium"} href={'Charities/' + charity.id}>Learn More</Link>
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
        <Box marginTop={'20'}>
          <Button color={'white'} bgColor={'brand100'} borderRadius={'40px'} px={'6'} fontWeight={'light'}>More Charities</Button>
        </Box>
      </VStack>

      {/* Register Charity */}
      <VStack as='section' align={'center'} justify={'center'} py={14} spacing={'8'}>
        <Image src="../helpingLady.png" alt="Dog and Cat" h={{ base: 'sm', md: 'xl' }} />
        <Heading as="h3" size="3xl" color={'brand200'} textAlign={{ base: 'center', md: 'revert' }}>
          Register your Charity
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacingY={{ base: 6, md: 'revert' }} spacingX={{ base: 'revert', md: 8 }} >
          <RegistrationCards color='brand100' title='Full Account' description={desc1} />
          <RegistrationCards color='accent' title='Profile Account' description={desc2} />
        </SimpleGrid>
      </VStack>


    </>
  )
}
