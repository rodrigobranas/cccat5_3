import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";

test("Deve testar o repositório de item", async function () {
	const connection = new PostgreSQLConnectionAdapter();
	const itemRepository = new ItemRepositoryDatabase(connection);
	const item = await itemRepository.getById(1);
	expect(item?.description).toBe("Guitarra");
	await connection.close();

});
