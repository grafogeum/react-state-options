import { fakerPL as faker } from "@faker-js/faker";

const randomName = () => faker.person.fullName();
const randomEmail = () => faker.internet.email();
const avatar = () => faker.image.avatar();

let people = [];

for (let i = 0; i < 10; i++) {
	people.push({
		randomName: randomName(),
		randomEmail: randomEmail(),
		avatar: avatar()
	});
}

console.log(people);
