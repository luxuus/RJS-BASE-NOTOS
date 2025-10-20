
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";
import { PostDTO } from "../dto/post.dto";


class PostService extends CrudAbstract<PostDTO>{
    API: ENDPOINTS = '/posts'
}

export default new PostService();