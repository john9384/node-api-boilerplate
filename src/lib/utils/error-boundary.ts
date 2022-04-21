const catchErrors = (fn: any) => (req: any, res: any, next: any) =>
	Promise.resolve(fn(req, res, next)).catch(next)

export default catchErrors
