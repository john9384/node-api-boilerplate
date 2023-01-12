export default class Session {
	public jwt: string
	public expiresAt: Date

	constructor(jwt: string, expiresAt: Date) {
		this.jwt = jwt
		this.expiresAt = expiresAt
	}

	// we'll use this method later to determine if the session has expired
	public isExpired(): boolean {
		return this.expiresAt < new Date()
	}
}
