export default interface Connection {
	query(stmt: string, params: any): Promise<any>;
	close(): Promise<void>;
}
