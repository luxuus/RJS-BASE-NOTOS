import { NotificationDTO } from "@/core/dto/notification.dto";
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";

class NotificationService extends CrudAbstract<NotificationDTO> {
  API: ENDPOINTS = "/notifications";
}

export default new NotificationService();
