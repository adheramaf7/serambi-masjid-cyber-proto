import { Image } from '@chakra-ui/react';
import logo from './../assets/logo.png';

export default function ApplicationLogo(props) {
  return <Image src={logo} {...props} />;
}
