import { FlightDTO } from "@/core/dto/flight.dto";
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";

class FlightService extends CrudAbstract<FlightDTO> {
  API: ENDPOINTS = "/flights";
}

export default new FlightService();
