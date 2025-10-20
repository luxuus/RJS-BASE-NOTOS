import { OrderDTO } from "@/core/dto/order.dto";
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";

class OrderService extends CrudAbstract<OrderDTO> {
  API: ENDPOINTS = "/orders";
}

export default new OrderService();
