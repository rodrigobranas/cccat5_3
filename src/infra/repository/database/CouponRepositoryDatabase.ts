import Coupon from "../../../domain/entity/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepository";
import Connection from "../../database/Connection";

export default class CouponRepositoryDatabase implements CouponRepository {

	constructor (readonly connection: Connection) {
	}

	async getByCode(code: string): Promise<Coupon | undefined> {
		const [couponData] = await this.connection.query("select * from ccca.coupon where code = $1", [code]);
		const coupon = new Coupon(couponData.code, parseFloat(couponData.percentage), new Date(couponData.issue_date));
		return coupon;
	}	
}
