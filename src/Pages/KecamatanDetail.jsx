import React from 'react';
import {
   Box,
   Divider,
   HStack,
   IconButton,
   Image,
   Stack,
   Stat,
   StatGroup,
   StatLabel,
   StatNumber,
   Table,
   TableContainer,
   Tbody,
   Td,
   Text,
   Th,
   Thead,
   Tr,
} from '@chakra-ui/react';
import { FiChevronRight, FiMap } from 'react-icons/fi';
import ImageMap from './../assets/map.jpg';

const masjid = [
   {
      nama: "Masjid Jami' Gresik",
      desa: 'Gresik',
      remas: 100,
   },
   {
      nama: "Masjid Jami' Gresik",
      desa: 'Gresik',
      remas: 100,
   },
   {
      nama: "Masjid Jami' Gresik",
      desa: 'Gresik',
      remas: 100,
   },
   {
      nama: "Masjid Jami' Gresik",
      desa: 'Gresik',
      remas: 100,
   },
   {
      nama: "Masjid Jami' Gresik",
      desa: 'Gresik',
      remas: 100,
   },
];

export default function KecamatanDetail() {
   return (
      <Stack direction={'column'}>
         <Stack
            border={'1px solid'}
            borderColor={'gray.200'}
            rounded={'md'}
            py={'5'}
            px="4"
            shadow={'sm'}
            bg={'white'}
            spacing={6}>
            <HStack spacing={3}>
               <FiMap fontSize={30} />
               <Text fontSize={'2xl'} fontWeight={'semibold'}>
                  Kecamatan Gresik
               </Text>
            </HStack>
            <HStack align={'start'} spacing={10}>
               <Box>
                  <StatGroup mb="4">
                     <Stat>
                        <StatLabel fontSize={'lg'} color={'gray.500'}>
                           Jumlah Masjid
                        </StatLabel>
                        <StatNumber fontSize={'3xl'}>40</StatNumber>
                     </Stat>
                     <Stat>
                        <StatLabel fontSize={'lg'} color={'gray.500'}>
                           Jumlah Remaja Masjid
                        </StatLabel>
                        <StatNumber fontSize={'3xl'}>200</StatNumber>
                     </Stat>
                  </StatGroup>

                  <Box>
                     <Text fontSize={'lg'} color={'gray.500'} mb="2">
                        Peta Persebaran Masjid{' '}
                     </Text>
                     <Box overflow={'hidden'} rounded={'md'} shadow={'sm'}>
                        <Image src={ImageMap} w={'full'} maxH={'400'} />
                     </Box>
                  </Box>
               </Box>
               <Box flexGrow={'1'}>
                  <Text fontSize={'xl'} fontWeight={'semibold'} mb="2">
                     Daftar Masjid
                  </Text>
                  <TableContainer>
                     <Table w={'full'}>
                        <Thead>
                           <Tr bg={'gray.700'}>
                              <Th textColor={'gray.100'} width="5%">
                                 #
                              </Th>
                              <Th textColor={'gray.100'} width="30%">
                                 Nama
                              </Th>
                              <Th textColor={'gray.100'} width="30%">
                                 Desa
                              </Th>
                              <Th textColor={'gray.100'} width="25%">
                                 Jml Remas
                              </Th>
                              <Th></Th>
                           </Tr>
                        </Thead>
                        <Tbody>
                           {masjid.map((item, index) => (
                              <Tr>
                                 <Td>{index + 1}</Td>
                                 <Td>{item.nama}</Td>
                                 <Td>{item.desa}</Td>
                                 <Td>{item.remas}</Td>
                                 <Td>
                                    <IconButton icon={<FiChevronRight />} />
                                 </Td>
                              </Tr>
                           ))}
                        </Tbody>
                     </Table>
                  </TableContainer>
               </Box>
            </HStack>
         </Stack>
      </Stack>
   );
}
