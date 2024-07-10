import { Transform } from 'class-transformer'
import { IsEmail, IsInt, IsOptional } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string

	@IsInt()
	@IsOptional()
	@Transform(({ value }) => Number(value))
	number: number
}
