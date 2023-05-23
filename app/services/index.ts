import { IAuthor } from '../types/IAuthor'
import { IMusic } from '../types/IMusic'

export async function getAllMusic(): Promise<IMusic[]> {
	const response = await fetch(`${process.env.API_URL}/music`)
	return await response.json()
}

export async function getAllAuthors(): Promise<IAuthor[]> {
	const response = await fetch(`${process.env.API_URL}/authors`)
	return await response.json()
}

export async function getCurrentAuthor(
	id: string | string[]
): Promise<IAuthor[]> {
	const response = await fetch(`${process.env.API_URL}/authors/${id}`)
	return await response.json()
}
