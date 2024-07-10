import { Injectable } from '@nestjs/common'
import { users } from './data'
import { UserDto } from './dto/user.dto'

@Injectable()
export class AppService {
	getUsers(dto: UserDto) {
		const searhByEmail = users.filter(item => item.email === dto.email)

		if (dto.number) {
			const searchByNumber = searhByEmail.filter(item =>
				item.number.includes(dto.number.toString())
			)

			return searchByNumber
		}
		return searhByEmail
	}
}
