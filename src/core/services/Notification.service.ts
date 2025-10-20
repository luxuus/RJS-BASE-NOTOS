
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";
import { NotificationDTO } from "../dto/Notification.dto";


class NotificationService extends CrudAbstract<NotificationDTO>{
    API: ENDPOINTS = '/notifications'
}