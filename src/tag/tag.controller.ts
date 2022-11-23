/* eslint-disable prettier/prettier */
import { TagEntity } from './tag.entity';
import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller('tags')
export class TagController {

    constructor(private readonly tagService: TagService) { }

    @Get()
    async findAll(): Promise<TagEntity[]> {
        return await this.tagService.findAll();
    }
}