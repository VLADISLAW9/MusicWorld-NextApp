const API_URL = 'http://localhost:3000/api'

import { IMusic } from '../types/IMusic'

export async function getAllMusic(): Promise<IMusic[]> {
	const response = await fetch(`${API_URL}/music`)
	return await response.json()
}