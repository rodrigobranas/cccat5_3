import Freight from "../../../domain/entity/Freight";
import ItemRepository from "../../../domain/repository/ItemRepository";
import SimulateFreightInput from "./SimulateFreightInput";
import SimulateFreightOutput from "./SimulateFreightOutput";

export default class SimulateFreight {

	constructor (readonly itemRepository: ItemRepository) {
	}

	async execute (input: SimulateFreightInput): Promise<SimulateFreightOutput> {
		const freight = new Freight();
		for (const orderItem of input.orderItems) {
			const item = await this.itemRepository.getById(orderItem.idItem);
			if (!item) throw new Error("Item not found");
			freight.addItem(item, orderItem.quantity);
		}
		const output = new SimulateFreightOutput(freight.getTotal());
		return output;
	}
}
