/*
Objetivo:
1° - Obter um usuário.
2° - Obter o número de telefone de um usuário a partir de seu ID.
3° - Obert o endereço do usuário pelo ID.
*/

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "José",
        dateOfBirth: new Date(),
      });
    }, 1000);
  });
}

function getPhone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        phone: "9888998999",
        DDI: 351,
      });
    }, 2000);
  });
}

function getAddress(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        address: "Rua do Dev",
      });
    }, 3000);
  });
}

async function main() {
  try {
    console.time("medida-promise");
    const user = await getUser();
    /* const phone = await getPhone(user.id);
    const address = await getAddress(user.id); */
    const result = await Promise.all([getPhone(user.id), getAddress(user.id)]);
    const address = result[1];
    const phone = result[0];
    console.log(`
    Nome: ${user.name}
    Telefone: (+${phone.DDI}) - ${phone.phone}
    Endereço: ${address.address}
    `);
    console.timeEnd("medida-promise");
  } catch (error) {
    console.error("Apareceu algum erro!", error);
  }
}
main();
