
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";
import { OrderDTO } from "../dto/Order.dto";


class OrderService extends CrudAbstract<OrderDTO>{
    API: ENDPOINTS = '/orders'
}

export default new OrderService();