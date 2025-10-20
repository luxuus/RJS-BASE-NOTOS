
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";
import { FlightDTO } from "../dto/flight.dto";


class FlightService extends CrudAbstract<FlightDTO>{
    API: ENDPOINTS = '/flights'
}

export default new FlightService();