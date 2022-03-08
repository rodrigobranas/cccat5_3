import ValidateCoupon from "../../src/application/usecase/validate-coupon/ValidateCoupon";
import CouponRepository from "../../src/domain/repository/CouponRepository";
import Connection from "../../src/infra/database/Connection";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";

let connection: Connection;
let couponRepository: CouponRepository;

beforeEach(function () {
	connection = new PostgreSQLConnectionAdapter();
	couponRepository = new CouponRepositoryDatabase(connection);
});

test("Deve validar um cupom de desconto", async function () {
	const validateCoupon = new ValidateCoupon(couponRepository);
	const isValid = await validateCoupon.execute("VALE20");
	expect(isValid).toBeTruthy();
});

afterEach(async function () {
	await connection.close();
});
