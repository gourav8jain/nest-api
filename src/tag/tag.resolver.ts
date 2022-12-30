import { Query, Resolver } from "@nestjs/graphql";
import { TagService } from "./tag.service";


@Resolver('tag')
export class TagResolver {

    constructor(private readonly tagService: TagService) { }

    @Query('tags')
    gettags() {
        return this.tagService.findAll();
    }
}