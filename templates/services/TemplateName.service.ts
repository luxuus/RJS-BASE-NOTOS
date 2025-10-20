import { TemplateNameDTO } from "@/core/dto/templatename.dto";
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";

class TemplateNameService extends CrudAbstract<TemplateNameDTO> {
  API: ENDPOINTS = "/templatenames";
}

export default new TemplateNameService();
