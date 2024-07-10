import {
	Controller,
	Get,
	Param,
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
	getUsers(@Query() dto: UserDto) {
		return this.appService.getUsers(dto)
	}
}
