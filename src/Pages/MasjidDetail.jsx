import {
   Box,
   Heading,
   IconButton,
   Stack,
   Table,
   TableContainer,
   Tbody,
   Td,
   Text,
   Th,
   Thead,
   Tr,
   VStack,
} from '@chakra-ui/react';
import users from './../json/users.json';
import { FiChevronRight } from 'react-icons/fi';

export default function MasjidDetail() {
   return (
      <Stack spacing={4} shadow={'md'} rounded={'md'} bg={'white'} p="4">
         <Box>
            <Heading fontSize={'2xl'} mb="2">
               Masjid Jami' Gresik
            </Heading>
            <Text color={'gray.500'}>
               Jl. KH. Wachid Hasyim No.6, Pekauman, Kec. Gresik, Kabupaten Gresik
            </Text>
         </Box>
         <VStack align={'start'} spacing={3}>
            <Text fontWeight={'semibold'}>Daftar Anggota Remaja Masjid</Text>
            <TableContainer w="full">
               <Table>
                  <Thead>
                     <Tr bg={'gray.700'}>
                        <Th textColor={'gray.100'} width="5%">
                           #
                        </Th>
                        <Th textColor={'gray.100'} width="30%">
                           Nama
                        </Th>
                        <Th textColor={'gray.100'} width="30%">
                           Alamat
                        </Th>
                        <Th textColor={'gray.100'} width="25%">
                           Nomor Telepon
                        </Th>
                        <Th></Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     {users.map((user, index) => (
                        <Tr>
                           <Td>{index + 1}</Td>
                           <Td>{user.name}</Td>
                           <Td>{user.address.city}</Td>
                           <Td>{user.phone}</Td>
                           <Td>
                              <IconButton icon={<FiChevronRight />} />
                           </Td>
                        </Tr>
                     ))}
                  </Tbody>
               </Table>
            </TableContainer>
         </VStack>
      </Stack>
   );
}
