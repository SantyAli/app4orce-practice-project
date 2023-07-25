import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(4)].map((_, index) => ({
  id: faker.datatype.uuid(),
  code: sample(['MAAD65896', 'MAAD65896', 'MAAD65896', 'MAAD65896', 'MAAD65896']),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  email: sample(['abs.gmail.com', 'abees.gmail.com', 'abefs.gmail.com', 'absfs.gmail.com', 'abaas.gmail.com']),
  phone: faker.phone.phoneNumber(),
  department: sample(['Leader', 'Hr Manager', 'UI Designer', 'UX Designer', 'UI/UX Designer']),
}));

export default users;
