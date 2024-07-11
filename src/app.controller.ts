import {
	Controller,
	Get,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { AppService } from './app.service'
import { UserDto } from './dto/user.dto'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@UsePipes(new ValidationPipe())
	@Get('users')
	async getUsers(@Query() dto: UserDto) {
		return await new Promise(resolve =>
			setTimeout(() => resolve(this.appService.getUsers(dto)), 5000)
		)
	}
}
