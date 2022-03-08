import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";

test("Deve testar a conexão com o banco de dados", async function () {
	const connection = new PostgreSQLConnectionAdapter();
	const items = await connection.query("select * from ccca.item", []);
	expect(items).toHaveLength(3);
	await connection.close();
});
