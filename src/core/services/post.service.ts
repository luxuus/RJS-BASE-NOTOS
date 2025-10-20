import { PostDTO } from "@/core/dto/post.dto";
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";

class PostService extends CrudAbstract<PostDTO> {
  API: ENDPOINTS = "/posts";
}

export default new PostService();
