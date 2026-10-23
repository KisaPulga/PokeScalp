import "server-only"
import { serieRepository } from "../repository/serie.repository"
import { BusinessError } from "../error";
import type { TablesInsert, TablesUpdate } from "@/src/types/database.types";

export const serieService = {
    async createSerie(data: TablesInsert<"serie">){
        return serieRepository.createSerie(data);
    },
    async getSeries(id: Number){
        return serieRepository.getSeries(id);
    },
    async getAllSeries(){
        return serieRepository.getAllSeries();
    },
    async deleteSerie(id: Number){
        return serieRepository.deleteSerie(id);
    },
    async updateSerie(id: Number, data: TablesUpdate<"serie">){
        return serieRepository.updateSerie(id, data);
    }
}

