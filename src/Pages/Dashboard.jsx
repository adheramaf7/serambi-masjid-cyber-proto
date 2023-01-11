import {
   Box,
   Stack,
   Text,
   Heading,
   Stat,
   Flex,
   StatLabel,
   StatNumber,
   useColorModeValue,
} from '@chakra-ui/react';
import { FiMoon, FiUsers } from 'react-icons/fi';

const kecamatan = [
   {
      name: 'Gresik',
      masjid: 200,
      remas: 400,
   },
   {
      name: 'Bungah',
      masjid: 200,
      remas: 400,
   },
   {
      name: 'Menganti',
      masjid: 200,
      remas: 400,
   },
   {
      name: 'Kebomas',
      masjid: 200,
      remas: 400,
   },
   {
      name: 'Manyar',
      masjid: 200,
      remas: 400,
   },
];

const StatsCard = ({ label, number, icon }) => {
   return (
      <Stat
         px={{ base: 2, md: 4 }}
         py={'5'}
         shadow={'md'}
         border={'1px solid'}
         borderColor={'gray.200'}
         rounded={'md'}>
         <Flex justifyContent={'space-between'}>
            <Box pl={{ base: 2, md: 4 }}>
               <StatLabel fontWeight={'medium'} fontSize={'md'}>
                  {label}
               </StatLabel>
               <StatNumber fontSize={'3xl'} fontWeight={'semibold'}>
                  {number}
               </StatNumber>
            </Box>
            <Box
               my={'auto'}
               color={useColorModeValue('gray.800', 'gray.200')}
               alignContent={'center'}>
               {icon}
            </Box>
         </Flex>
      </Stat>
   );
};

export default function Dashboard() {
   return (
      <Stack spacing="4" direction="row">
         <Box flex="4">
            <Box p="4" boxShadow="md" rounded={'md'} mb="4" bg="white">
               <Text>Selamat Datang,</Text>
               <Heading fontSize="2xl">Mustajib</Heading>
            </Box>
            <Stack direction={'row'} spacing={2} justify={'space-between'}>
               <Box flex={1} bg="white">
                  <StatsCard icon={<FiMoon fontSize={'50'} />} label={'Masjid'} number={200} />
               </Box>
               <Box flex={1} bg="white">
                  <StatsCard
                     icon={<FiUsers fontSize={'50'} />}
                     label={'Remaja Masjid'}
                     number={200}
                  />
               </Box>
            </Stack>
         </Box>
         <Box flex="2">
            <Stack p="4" boxShadow="md" rounded={'md'} bg="white">
               <Heading fontSize="xl" mb="2">
                  Statistik per Kecamatan
               </Heading>
               <Stack spacing="3">
                  {kecamatan.map((kec) => (
                     <Stack
                        bg="gray.50"
                        px="4"
                        rounded={'md'}
                        shadow={'sm'}
                        border={'1px'}
                        borderColor={'gray.100'}
                        py="3"
                        direction={'row'}
                        justify={'space-between'}
                        align={'center'}>
                        <Box>
                           <Text fontSize={'lg'} fontWeight={'semibold'}>
                              {kec.name}
                           </Text>
                        </Box>
                        <Stack>
                           <Stack direction={'row'} align={'center'}>
                              <FiMoon />
                              <Text>{kec.masjid}</Text>
                           </Stack>
                           <Stack direction={'row'} align={'center'}>
                              <FiUsers />
                              <Text>{kec.remas}</Text>
                           </Stack>
                        </Stack>
                     </Stack>
                  ))}
               </Stack>
            </Stack>
         </Box>
      </Stack>
   );
}
