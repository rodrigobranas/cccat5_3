import SimulateFreight from "../../src/application/usecase/simulate-freight/SimulateFreight";
import ItemRepository from "../../src/domain/repository/ItemRepository";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";

let connection: Connection;
let itemRepository: ItemRepository;

beforeEach(function () {
	connection = new PostgreSQLConnectionAdapter();
	itemRepository = new ItemRepositoryDatabase(connection);
});

test("Deve simular o frete de um pedido", async function () {
	const simulateFreight = new SimulateFreight(itemRepository);
	const input = {
		orderItems: [
			{ idItem: 1, quantity: 1},
			{ idItem: 2, quantity: 1},
			{ idItem: 3, quantity: 3}
		]
	};
	const output = await simulateFreight.execute(input);
	expect(output.total).toBe(260);
});

afterEach(async function () {
	await connection.close();
});
